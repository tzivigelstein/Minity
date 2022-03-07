import {
  FORM_PROJECT,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  SET_FILTERED_PROJECTS,
  ADD_PROJECTS,
  FORM_VALIDATION,
  CURRENT_PROJECT_UPDATE,
  DELETE_PROJECT_SUCCESSFUL,
  DELETE_PROJECT_ERROR,
  GET_PROJECTS_ERROR,
  ADD_PROJECTS_ERROR,
  REMOVE_PROJECT_LOADING
} from './types'

const projectReducer = (state, { type, payload }) => {
  switch (type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true
      }

    case GET_PROJECTS:
      return {
        ...state,
        loadingProjects: true
      }

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        loadingProjects: false
      }

    case SET_FILTERED_PROJECTS:
      return {
        ...state,
        filteredProjects: payload
      }

    case ADD_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, payload],
        form: false,
        errorform: false
      }

    case FORM_VALIDATION:
      return {
        ...state,
        errorform: true
      }

    case CURRENT_PROJECT_UPDATE:
      return {
        ...state,
        currentProject: state.projects.find(project => project.id === payload) || { id: payload }
      }

    case DELETE_PROJECT_SUCCESSFUL:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== payload),
        removeProjectLoading: false
      }

    case DELETE_PROJECT_ERROR:
      return {
        ...state,
        msg: payload,
        removeProjectLoading: false
      }

    case REMOVE_PROJECT_LOADING:
      return {
        ...state,
        removeProjectLoading: true
      }

    case GET_PROJECTS_ERROR:
      return {
        ...state,
        msg: payload
      }

    case ADD_PROJECTS_ERROR:
      return {
        ...state,
        msg: payload
      }

    default:
      return state
  }
}

export default projectReducer
