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
    <div className={styles.taskChipContainer}>
      <button onClick={handleChangeTaskState} className={styles.taskNameButton}>
        {name}
      </button>
      <TaskActionsContainer task={task} />
    </div>
  )
}

export default TaskChip
