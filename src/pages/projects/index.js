import { useEffect } from 'react'
import Head from 'next/head'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'

const Projects = () => {
  const { authUser, loading, isAuth } = useAuth()
  const { getProjects } = useProjects()

  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      authUser()
    }
    if (isAuth) {
      getProjects()
    } else if (!isAuth && !loading) {
      router.replace('/login')
    }
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <Head>
        <title>Minity | Projects</title>
      </Head>
      <Wrapper title="minity">
        <ProjectList />
      </Wrapper>
    </>
  )
}

export default Projects
