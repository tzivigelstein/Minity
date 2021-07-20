import React, { useEffect } from 'react'
import styles from './index.module.css'
import Wrapper from '../../../components/Wrapper'
import { BackArrow } from '../../../components/Icons'
import TasksList from '../../../components/Tasks/TasksList'
import useTasks from '../../../hooks/useTasks'
import NestedLink from '../../../components/UI/Links/NestedLink'
import useAuth from '../../../hooks/useAuth'
import client from '../../../config/axios'
import useProjects from '../../../hooks/useProjects'
import Head from 'next/head'

const Tasks = ({ id }) => {
  const { isAuth, authUser } = useAuth()
  const { projects, loading, getProjects, setActualProject } = useProjects()
  const { getTasks } = useTasks()

  console.log(id)

  useEffect(() => {
    if (isAuth) {
      getTasks(id)
    } else {
      authUser()
    }
    //eslint-disable-next-line
  }, [isAuth, loading])

  return (
    <>
      <Head>
        <title>Minity | Tasks</title>
      </Head>
      <Wrapper
        componentLeft={
          <NestedLink>
            <BackArrow className={styles.backArrow} />
            <span className={styles.backText}>Projects</span>
          </NestedLink>
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
