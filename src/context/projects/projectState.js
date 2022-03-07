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
  CURRENT_PROJECT,
  CURRENT_PROJECT_UPDATE,
  DELETE_PROJECT_SUCCESSFUL,
  DELETE_PROJECT_ERROR,
  GET_PROJECTS_ERROR,
  ADD_PROJECTS_ERROR,
  REMOVE_PROJECT_LOADING
} from './types'
import { alertTypes } from '../../types'

const initialState = {
  projects: [],
  filteredProjects: [],
  form: false,
  errorform: false,
  currentProject: null,
  msg: null,
  loadingProjects: false,
  removeProjectLoading: false
}

const ProjectState = props => {
  const [state, dispatch] = useReducer(projectReducer, initialState)

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT
    })
  }

  //Get all projects
  const getProjects = async () => {
    dispatch({
      type: GET_PROJECTS
    })

    fetch('/api/projects')
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: GET_PROJECTS_SUCCESS,
          payload: data
        })
      )
      .catch(error => {
        const alert = {
          msg: "Couldn't get projects",
          category: alertTypes.alertError
        }
        dispatch({
          type: GET_PROJECTS_ERROR,
          payload: alert
        })

        console.error(error)
      })
  }

  //Search projects
  const setFilteredProjects = projects => {
    dispatch({
      type: SET_FILTERED_PROJECTS,
      payload: projects
    })
  }

  //Add new project
  const createProject = async project => {
    fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    })
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: ADD_PROJECTS,
          payload: data
        })
      )
      .catch(error => {
        const alert = {
          msg: 'There was an error',
          category: alertTypes.alertError
        }
        dispatch({
          type: ADD_PROJECTS_ERROR,
          payload: alert
        })

        console.error(error)
      })
  }

  //Show error on form validation
  const showError = () => {
    dispatch({
      type: FORM_VALIDATION
    })
  }

  //Select project wich was clicked
  const setCurrentProject = projectId => {
    dispatch({
      type: CURRENT_PROJECT_UPDATE,
      payload: projectId
    })
  }

  //Delete project
  const removeProject = async projectId => {
    dispatch({
      type: REMOVE_PROJECT_LOADING
    })

    try {
      await client.delete(`/api/projects/${projectId}`)
      dispatch({
        type: DELETE_PROJECT_SUCCESSFUL,
        payload: projectId
      })
    } catch (error) {
      const alert = {
        msg: 'There was an error',
        category: alertTypes.alertError
      }
      dispatch({
        type: DELETE_PROJECT_ERROR,
        payload: alert
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
        currentProject: state.currentProject,
        msg: state.msg,
        loadingProjects: state.loadingProjects,
        removeProjectLoading: state.removeProjectLoading,
        showForm,
        getProjects,
        setFilteredProjects,
        createProject,
        showError,
        setCurrentProject,
        removeProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
