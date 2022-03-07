import { useMemo } from 'react'
import styles from './index.module.css'
import TaskActionsContainer from '../TaskActionContainer'
import useTasks from '../../../hooks/useTasks'

const TaskChip = ({ task, tasks, setTasks }) => {
  const { updateTask, setSelectedTask } = useTasks()
  const { name } = task

  const { state } = task

  const handleChangeTaskState = () => {
    setSelectedTask(task)
    const newTask = {
      ...task,
      state: !state
    }

    updateTask(newTask)
  }

  const date = useMemo(() => {
    const date = new Date(task.date)
    const time = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit'
    })

    return `${time} ${date.toLocaleDateString()}`
  }, [task.date])

  return (
    <div title={date} className={styles.taskChipContainer}>
      <button onClick={handleChangeTaskState} className={styles.taskNameButton}>
        {name}
      </button>
      <TaskActionsContainer task={task} tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default TaskChip
