import { useEffect } from 'react'
import Head from 'next/head'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'
import useAuth from '../../hooks/useAuth'

const Projects = () => {
  const { authUser, user } = useAuth()
  const { getProjects } = useProjects()

  useEffect(() => {
    if (user) {
      getProjects()
    } else {
      authUser()
    }
    //eslint-disable-next-line
  }, [user])

  return (
    <>
      <Head>
        <title>Minity | Projects</title>
      </Head>
      <Wrapper>
        <ProjectList />
      </Wrapper>
    </>
  )
}

export default Projects
