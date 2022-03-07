import { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Wrapper from '../../components/Wrapper'
import { BackArrow } from '../../components/Icons'
import BaseLink from '../../components/UI/Links/BaseLink'
import TasksList from '../../components/Tasks/TasksList'
import useTasks from '../../hooks/useTasks'
import { useRouter } from 'next/router'
import useProjects from '../../hooks/useProjects'
import { useSession } from 'next-auth/react'

const Tasks = () => {
  const { getTasks } = useTasks()
  const { setCurrentProject } = useProjects()
  const router = useRouter()

  const { status } = useSession()

  const {
    query: { id }
  } = useRouter()

  useEffect(() => {
    if (status === 'authenticated' && typeof id !== 'undefined') {
      getTasks(id)
      setCurrentProject(id)
    } else if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [id, status])

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
