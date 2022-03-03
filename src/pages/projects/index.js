import { useEffect } from 'react'
import Head from 'next/head'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'
import useAuth from '../../hooks/useAuth'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Projects = () => {
  const { loading } = useAuth()
  const { getProjects } = useProjects()

  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session) getProjects()
    else router.replace('/login')
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
