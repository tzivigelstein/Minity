import React from 'react'
import styles from './index.module.css'
import TaskActionsContainer from '../TaskActionContainer'

const TaskChip = ({ task }) => {
  const { name } = task

  return (
    <div className={styles.taskChipContainer}>
      <p className={styles.taskName}>{name}</p>
      <TaskActionsContainer task={task} />
    </div>
  )
}

export default TaskChip
