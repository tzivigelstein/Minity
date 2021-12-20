import React from 'react'
import styles from './index.module.css'
import TaskActionsContainer from '../TaskActionContainer'
import useTasks from '../../../hooks/useTasks'

const TaskChip = ({ task }) => {
  const { updateTask } = useTasks()
  const { name } = task

  const { state } = task

  const handleChangeTaskState = () => {
    const newTask = {
      ...task,
      state: !state,
    }

    updateTask(newTask)
  }

  return (
    <button onClick={handleChangeTaskState} className={styles.taskChipContainer}>
      <span className={styles.taskName}>{name}</span>
      <TaskActionsContainer task={task} />
    </button>
  )
}

export default TaskChip
