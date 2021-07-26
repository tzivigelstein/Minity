import React, { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Wrapper from '../../../components/Wrapper'
import { BackArrow } from '../../../components/Icons'
import TasksList from '../../../components/Tasks/TasksList'
import useTasks from '../../../hooks/useTasks'
import SimpleLink from '../../../components/UI/Links/SimpleLink'
import useAuth from '../../../hooks/useAuth'
import client from '../../../config/axios'
import useProjects from '../../../hooks/useProjects'

const Tasks = ({ id }) => {
  const { isAuth, authUser } = useAuth()
  const { getTasks } = useTasks()

  console.log(id)

  useEffect(() => {
    if (isAuth) {
      getTasks(id)
    } else {
      authUser()
    }
    //eslint-disable-next-line
  }, [isAuth])

  return (
    <>
      <Head>
        <title>Minity | Tasks</title>
      </Head>
      <Wrapper
        componentLeft={
          <Link href="/projects">
            <SimpleLink>
              <BackArrow className={styles.backArrow} />
              <span className={styles.backText}>Projects</span>
            </SimpleLink>
          </Link>
        }
      >
        {/* {!loading && <TasksList actualProject={id} />} */}
      </Wrapper>
    </>
  )
}

export async function getServerSideProps({ query: { id } }) {
  //TODO fetch items to render on server side
  // const query = await client.get('/api/tasks/')

  return { props: { id } }
}

export default Tasks
