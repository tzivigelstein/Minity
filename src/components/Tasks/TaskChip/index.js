import React from 'react'
import styles from './index.module.css'
import TaskActionsContainer from '../TaskActionContainer'

const TaskChip = ({ task }) => {
  const { name } = task

  return (
    <div className={styles.taskChipContainer}>
      <span className={styles.taskName}>{name}</span>
      <TaskActionsContainer task={task} />
    </div>
  )
}

export default TaskChip
