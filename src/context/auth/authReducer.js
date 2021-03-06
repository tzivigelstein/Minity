import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  GET_USER,
  LOG_OUT,
  VISUAL_LOADING,
} from '../../types'

export default (state, action) => {
  switch (action.type) {
    case VISUAL_LOADING:
      return {
        visualLoading: true,
      }
    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        auth: true,
        msg: null,
        loading: false,
        visualLoading: false,
      }
    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
        loading: false,
      }
    case LOG_OUT:
    case ERROR_LOGIN:
    case ERROR_REGISTER:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        msg: action.payload,
        auth: null,
        loading: false,
        visualLoading: false,
      }
    default:
      return state
  }
}
