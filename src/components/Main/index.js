import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import useProjects from '../../hooks/useProjects'
import Navbar from '../Layout/Navbar/Navbar'
import Header from '../Layout/Header/Header'
import ProjectList from '../Projects/ProjectList'
import TasksList from '../Tasks/TasksList'
import Input from '../UI/Input'
import { Search } from '../Icons'

const Index = () => {
  const { getProjects, actualProject } = useProjects()

  useEffect(() => {
    getProjects()
  }, [])

  return (
    <>
      <div className={styles.appWrapper}>
        <Navbar />
        <div className={styles.wrapper}>
          <Header />
          <div className={styles.container}>
            <ProjectList />
            {actualProject && <TasksList />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
