import { useReducer } from 'react'
import TasksContext from './tasksContext'
import tasksReducer from './tasksReducer'
import client from '../../config/axios'

import {
  GET_TASKS_SUCCESSFUL,
  ADD_TASKS_LOADING,
  DELETE_TASK,
  UPDATE_TASK,
  SET_SELECTED_TASK,
  TASK_ERROR,
  GET_TASKS_LOADING,
  SET_TASKS_LOADING,
  SET_TASKS_SUCCESSFUL,
  GET_TASKS_ERROR,
  ADD_TASK_FINALLY,
  ADD_TASK_SUCCESSFUL,
  DELETE_TASK_ERROR,
  UPDATE_TASK_LOADING
} from './types'

const TaskState = props => {
  const initialState = {
    tasks: [],
    cachedTasks: [],
    taskError: false,
    selectedTask: null,
    getTasksLoading: false,
    addTaskLoading: false,
    updateTaskLoading: false
  }

  const [state, dispatch] = useReducer(tasksReducer, initialState)

  const setTasks = async tasks => {
    dispatch({
      type: SET_TASKS_LOADING
    })

    dispatch({
      type: SET_TASKS_SUCCESSFUL,
      payload: tasks
    })
  }

  //Get project tasks
  const getTasks = async project => {
    dispatch({
      type: GET_TASKS_LOADING
    })

    fetch(`/api/tasks/${project}`)
      .then(res => res.json())
      .then(({ tasks }) => {
        dispatch({
          type: GET_TASKS_SUCCESSFUL,
          payload: tasks
        })
      })
      .catch(error => {
        console.error(error)
        dispatch({ type: GET_TASKS_ERROR })
      })
  }

  //Add task to the project
  const addTask = async (task, project) => {
    const options = {
      body: JSON.stringify(task),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    dispatch({
      type: ADD_TASKS_LOADING
    })

    fetch(`/api/tasks/${project}`, options)
      .then(res => res.json())
      .then(task => {
        dispatch({
          type: ADD_TASK_SUCCESSFUL,
          payload: task
        })
      })
      .catch(console.error)
      .finally(() => {
        dispatch({
          type: ADD_TASK_FINALLY
        })
      })
  }

  //Task error validation
  const showError = () => {
    dispatch({
      type: TASK_ERROR
    })
  }

  //Delete task
  const deleteTask = async (task, project) => {
    // Pre deleting the task from cache
    dispatch({
      type: DELETE_TASK,
      payload: task
    })

    const options = {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE',
      body: JSON.stringify({ project })
    }

    fetch(`/api/tasks/${task.id}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
      })
      .catch(error => {
        console.error(error)
        dispatch({
          type: DELETE_TASK_ERROR
        })
      })
  }

  const setSelectedTask = task => {
    dispatch({
      type: SET_SELECTED_TASK,
      payload: task
    })
  }

  const updateTask = async task => {
    const { id } = task

    dispatch({
      type: UPDATE_TASK_LOADING
    })

    try {
      const query = await client.put(`/api/tasks/${id}`, task)

      dispatch({
        type: UPDATE_TASK,
        payload: query.data
      })
    } catch (error) {
      console.error(error)
    }
  }

  function setTasksListOrder({ order }) {
    dispatch({
      type: 'SET_TASKS_LIST_ORDER',
      payload: order
    })

    console.log(state.tasks, order)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        taskError: state.taskError,
        selectedTask: state.selectedTask,
        getTasksLoading: state.getTasksLoading,
        setTasksLoading: state.setTasksLoading,
        addTaskLoading: state.addTaskLoading,
        updateTaskLoading: state.updateTaskLoading,
        setTasksListOrder,
        setTasks,
        getTasks,
        addTask,
        showError,
        deleteTask,
        setSelectedTask,
        updateTask
      }}
    >
      {props.children}
    </TasksContext.Provider>
  )
}

export default TaskState
