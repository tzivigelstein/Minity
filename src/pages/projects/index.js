import { useEffect } from 'react'
import Head from 'next/head'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const Projects = () => {
  const { getProjects } = useProjects()

  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      getProjects()
    } else if (status === 'unauthenticated') {
      router.replace('/login')
    }
  }, [status])

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
