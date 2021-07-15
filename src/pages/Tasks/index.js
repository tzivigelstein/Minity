import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/Wrapper'
import { BackArrow } from '../../components/Icons'
import TasksList from '../../components/Tasks/TasksList'

const Tasks = ({ match }) => {
  const { projectId } = match.params

  return (
    <Wrapper
      componentLeft={
        <div className={styles.backArrowContainer}>
          <BackArrow className={styles.backArrow} />
          <span className={styles.backText}>Projects</span>
        </div>
      }
    >
      <TasksList />
    </Wrapper>
  )
}

export default Tasks
