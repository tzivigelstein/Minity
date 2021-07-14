import { useContext } from 'react'
import taskContext from '../context/tasks/tasksContext'

const useTasks = () => useContext(taskContext)

export default useTasks
