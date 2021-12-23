import React from 'react'
import styles from './index.module.css'
import TaskActionsContainer from '../TaskActionContainer'
import useTasks from '../../../hooks/useTasks'

const TaskChip = ({ task }) => {
  const { updateTask } = useTasks()
  const { name } = task

  const { state } = task

  return (
    <div className={styles.taskChipContainer}>
      <span className={styles.taskName}>{name}</span>
      <TaskActionsContainer task={task} />
    </div>
  )
}

export default TaskChip
