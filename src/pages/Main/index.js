import React, { useEffect } from 'react'
import styles from './index.module.css'
import useProjects from '../../hooks/useProjects'
import ProjectList from '../../components/Projects/ProjectList'
import Wrapper from '../../components/Wrapper'

const Index = () => {
  const { getProjects } = useProjects()

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <Wrapper>
      <ProjectList />
    </Wrapper>
  )
}

export default Index
