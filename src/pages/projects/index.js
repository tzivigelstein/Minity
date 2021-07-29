import { useEffect } from 'react'
import Head from 'next/head'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'

const Projects = () => {
  const { authUser, user, isAuth } = useAuth()
  const { getProjects } = useProjects()

  const router = useRouter()

  useEffect(() => {
    authUser()
    if (isAuth) {
      getProjects()
      console.log('aca entro cuando ya esta auth')
    } else {
      router.replace('/login')
    }

    //eslint-disable-next-line
  }, [])

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
