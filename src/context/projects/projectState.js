import React, { useReducer } from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'
import client from '../../config/axios'

import {
  FORM_PROJECT,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  SET_FILTERED_PROJECTS,
  ADD_PROJECTS,
  FORM_VALIDATION,
  ACTUAL_PROJECT,
  ACTUAL_PROJECT_UPDATE,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from './types'

const initialState = {
  projects: [],
  filteredProjects: [],
  form: false,
  errorform: false,
  actualProject: null,
  msg: null,
  loading: false,
  loadingProjects: false,
}

const ProjectState = props => {
  const [state, dispatch] = useReducer(projectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    })
  }

  //Get all projects
  const getProjects = async () => {
    try {
      dispatch({
        type: GET_PROJECTS,
      })
      const query = await client.get('/api/projects')
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: query.data,
      })
    } catch (error) {
      const alert = {
        msg: 'There was an error',
        category: 'alerta-error',
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      })
    }
  }

  //Search projects
  const setFilteredProjects = projects => {
    dispatch({
      type: SET_FILTERED_PROJECTS,
      payload: projects,
    })
  }

  //Add new project
  const addProject = async project => {
    try {
      const query = await client.post('/api/projects', project)
      dispatch({
        type: ADD_PROJECTS,
        payload: query.data,
      })
    } catch (error) {
      const alert = {
        msg: 'There was an error',
        category: 'alerta-error',
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      })
    }
  }

  //Show error on form validation
  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    })
  }

  //Select project wich was clicked
  const setActualProject = projectId => {
    dispatch({
      type: ACTUAL_PROJECT,
    })
    dispatch({
      type: ACTUAL_PROJECT_UPDATE,
      payload: projectId,
    })
  }

  //Delete project
  const deleteProject = async projectId => {
    try {
      await client.delete(`/api/projects/${projectId}`)
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      })
    } catch (error) {
      const alert = {
        msg: 'There was an error',
        category: 'alerta-error',
      }
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      })
    }
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        filteredProjects: state.filteredProjects,
        form: state.form,
        errorform: state.errorform,
        actualProject: state.actualProject,
        msg: state.msg,
        loading: state.loading,
        loadingProjects: state.loadingProjects,
        showForm,
        getProjects,
        setFilteredProjects,
        addProject,
        showError,
        setActualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
