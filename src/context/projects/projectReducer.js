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

export default (state, { type, payload }) => {
  switch (type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      }

    case GET_PROJECTS:
      return {
        ...state,
        loading: true,
      }

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: payload,
        loading: false,
      }

    case SET_FILTERED_PROJECTS:
      return {
        ...state,
        filteredProjects: payload,
      }

    case ADD_PROJECTS:
      return {
        ...state,
        projects: [...state.projects, payload],
        form: false,
        errorform: false,
      }

    case FORM_VALIDATION:
      return {
        ...state,
        errorform: true,
      }

    case ACTUAL_PROJECT:
      return {
        ...state,
        loadingProjects: true,
      }

    case ACTUAL_PROJECT_UPDATE:
      return {
        ...state,
        loadingProjects: false,
        actualProject: state.projects.find(project => project._id === payload),
      }

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project._id !== payload),
        project: null,
      }

    case PROJECT_ERROR:
      return {
        ...state,
        msg: payload,
      }

    default:
      return state
  }
}
