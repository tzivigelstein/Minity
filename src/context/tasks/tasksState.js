import React, { useReducer } from 'react'
import TasksContext from './tasksContext'
import TasksReducer from './tasksReducer'
import client from '../../config/axios'

import { PROJECT_TASKS, ADD_TASK, TASK_ERROR, DELETE_TASK, ACTUAL_TASK, UPDATE_TASK } from '../../types'

const TaskState = props => {
  const initialState = {
    tasksproject: [],
    taskerror: false,
    selectedtask: null,
  }

  const [state, dispatch] = useReducer(TasksReducer, initialState)

  //Funciones

  //Obtencion de tareas de un proyecto

  const getTasks = async project => {
    try {
      const query = await client.get(`/api/tasks/`, { params: { project } })
      dispatch({
        type: PROJECT_TASKS,
        payload: query.data.tasks,
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Agregar tarea a el proyecto en cuestion

  const addTask = async task => {
    try {
      await client.post('/api/tasks', task)
      dispatch({
        type: ADD_TASK,
        payload: task,
      })
    } catch (error) {
      console.log(error)
    }
  }

  //Validacion de error en la tarea

  const showError = () => {
    dispatch({
      type: TASK_ERROR,
    })
  }

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

  const taskExtract = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    })
  }

  const updateTask = async task => {
    try {
      const query = await client.put(`/api/tasks/${task._id}`, task)
      dispatch({
        type: UPDATE_TASK,
        payload: query.data.task,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasksproject: state.tasksproject,
        taskerror: state.taskerror,
        selectedtask: state.selectedtask,
        getTasks,
        addTask,
        showError,
        deleteTask,
        taskExtract,
        updateTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  )
}

export default TaskState
