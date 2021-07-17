import React, { useEffect } from 'react'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'

const Index = () => {
  const { getProjects } = useProjects()

  useEffect(() => {
    getProjects()
    //eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <ProjectList />
    </Wrapper>
  )
}

export default Index
