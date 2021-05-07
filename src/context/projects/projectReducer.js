import {
  FORM_PROJECT,
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  ADD_PROJECTS,
  FORM_VALIDATION,
  ACTUAL_PROJECT,
  ACTUAL_PROJECT_UPDATE,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from '../../types/index'

export default (state, action) => {
  switch (action.type) {
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
        PROJECTS: action.payload,
        loading: false,
      }
    case ADD_PROJECTS:
      return {
        ...state,
        PROJECTS: [...state.PROJECTS, action.payload],
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
        project: state.PROJECTS.filter(project => project._id === action.payload),
      }
    case DELETE_PROJECT:
      return {
        ...state,
        PROJECTS: state.PROJECTS.filter(project => project._id !== action.payload),
        project: null,
      }
    case PROJECT_ERROR:
      return {
        ...state,
        msg: action.payload,
      }
    default:
      return state
  }
}
