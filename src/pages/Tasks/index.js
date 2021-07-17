import React, { useEffect } from 'react'
import styles from './index.module.css'
import Wrapper from '../../components/Wrapper'
import { BackArrow } from '../../components/Icons'
import TasksList from '../../components/Tasks/TasksList'
import useTasks from '../../hooks/useTasks'
import NestedLink from '../../components/UI/Links/NestedLink'

const Tasks = ({ match }) => {
  const { projectId } = match.params
  const { getTasks } = useTasks()

  useEffect(() => {
    getTasks(projectId)
    //eslint-disable-next-line
  }, [])

  return (
    <Wrapper
      componentLeft={
        <NestedLink>
          <BackArrow className={styles.backArrow} />
          <span className={styles.backText}>Projects</span>
        </NestedLink>
      }
    >
      <TasksList />
    </Wrapper>
  )
}

export default Tasks
