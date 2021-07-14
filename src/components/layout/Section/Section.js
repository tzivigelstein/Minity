import React from 'react'
import styles from './section.module.css'
import Projects from '../../Projects/ProjectList'
import TaskList from '../../Tasks/TasksList'
import useProjects from '../../../hooks/useProjects'

const Section = () => {
  const { actualProject } = useProjects()

  return (
    <section className={styles.section}>
      <Projects />
      {actualProject && <TaskList />}
    </section>
  )
}

export default Section
