import React, { useReducer } from 'react'
import TasksContext from './tasksContext'
import tasksReducer from './tasksReducer'
import client from '../../config/axios'

import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SET_SELECTED_TASK,
  TASK_ERROR,
  LOADING,
  SET_TASKS,
} from './types'

const TaskState = props => {
  const initialState = {
    tasks: [],
    taskError: false,
    selectedTask: null,
    loading: false,
  }

  const [state, dispatch] = useReducer(tasksReducer, initialState)

  const setTasks = async tasks => {
    dispatch({
      type: LOADING,
    })

    dispatch({
      type: SET_TASKS,
      payload: tasks,
    })
  }

  //Get project tasks
  const getTasks = async project => {
    dispatch({
      type: LOADING,
    })

    try {
      const config = { params: { project } }
      const query = await client.get('/api/tasks/', config)

      dispatch({
        type: GET_TASKS,
        payload: query.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Add task to the project
  const addTask = async task => {
    try {
      const query = await client.post('/api/tasks', task)
      dispatch({
        type: ADD_TASK,
        payload: query.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Task error validation
  const showError = () => {
    dispatch({
      type: TASK_ERROR,
    })
  }

  //Delete task
  const deleteTask = async (id, project) => {
    try {
      await client.delete(`/api/tasks/${id}`, { params: { project } })
      dispatch({
        type: DELETE_TASK,
        payload: id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const setSelectedTask = task => {
    dispatch({
      type: SET_SELECTED_TASK,
      payload: task,
    })
  }

  const updateTask = async task => {
    console.log(task)
    const { id } = task
    try {
      const query = await client.put(`/api/tasks/${id}`, task)

      dispatch({
        type: UPDATE_TASK,
        payload: query.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        taskError: state.taskError,
        selectedTask: state.selectedTask,
        loading: state.loading,
        setTasks,
        getTasks,
        addTask,
        showError,
        deleteTask,
        setSelectedTask,
        updateTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  )
}

export default TaskState
