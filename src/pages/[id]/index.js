import { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Wrapper from '../../components/Wrapper'
import { BackArrow } from '../../components/Icons'
import BaseLink from '../../components/UI/Links/BaseLink'
import TasksList from '../../components/Tasks/TasksList'
import useTasks from '../../hooks/useTasks'
import { useRouter } from 'next/dist/client/router'
import useProjects from '../../hooks/useProjects'

const Tasks = () => {
  const { getTasks } = useTasks()
  const { setCurrentProject } = useProjects()

  const {
    query: { id }
  } = useRouter()

  useEffect(() => {
    if (typeof id !== 'undefined') {
      getTasks(id)
      setCurrentProject(id)
    }
  }, [id])

  return (
    <>
      <Head>
        <title>Minity | Tasks</title>
      </Head>
      <Wrapper
        componentLeft={
          <Link href="/projects" passHref={true}>
            <BaseLink>
              <BackArrow className={styles.backArrow} />
              <span className={styles.backText}>Projects</span>
            </BaseLink>
          </Link>
        }
      >
        <TasksList />
      </Wrapper>
    </>
  )
}

export default Tasks
