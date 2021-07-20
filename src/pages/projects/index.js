import { useEffect } from 'react'
import Head from 'next/head'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'
import useAuth from '../../hooks/useAuth'

const Index = () => {
  const { isAuth, authUser } = useAuth()
  const { getProjects } = useProjects()

  useEffect(() => {
    if (isAuth) {
      getProjects()
    } else {
      authUser()
    }
    //eslint-disable-next-line
  }, [isAuth])

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

export default Index
