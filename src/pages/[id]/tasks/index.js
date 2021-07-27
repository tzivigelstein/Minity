import React, { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import Wrapper from '../../../components/Wrapper'
import { BackArrow } from '../../../components/Icons'
import SimpleLink from '../../../components/UI/Links/SimpleLink'
import useAuth from '../../../hooks/useAuth'
import client from '../../../config/axios'
import TasksList from '../../../components/Tasks/TasksList'
import useTasks from '../../../hooks/useTasks'

const Tasks = ({ tasks }) => {
  const { user, authUser } = useAuth()
  const { setTasks } = useTasks()

  useEffect(() => {
    if (user) {
      setTasks(tasks)
    } else {
      authUser()
    }
    //eslint-disable-next-line
  }, [user])

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
        {user && <TasksList />}
      </Wrapper>
    </>
  )
}

export async function getServerSideProps(context) {
  const { params, req } = context
  const { id } = params
  const { cookies } = req

  const token = cookies.tk || null

  //TODO fetch items to render on server side
  try {
    const config = {
      params: { project: id },
      headers: {
        'x-auth-token': token,
      },
    }
    const query = await client.get('/api/tasks/', config)
    const tasks = query.data.tasks
    return { props: { tasks } }
  } catch (error) {
    return { props: { tasks: null } }
  }
}

export default Tasks
