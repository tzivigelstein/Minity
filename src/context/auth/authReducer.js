import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  AUTH_USER,
  LOG_OUT,
  VISUAL_LOADING,
} from '../../types'

export default (state, { type, payload }) => {
  switch (type) {
    case VISUAL_LOADING:
      return {
        visualLoading: true,
      }
    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      localStorage.setItem('token', payload.token)
      return {
        ...state,
        isAuth: true,
        msg: null,
        loading: false,
        visualLoading: false,
      }
    case AUTH_USER:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuth: true,
      }
    case LOG_OUT:
    case ERROR_LOGIN:
    case ERROR_REGISTER:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        msg: payload,
        isAuth: false,
        loading: false,
        visualLoading: false,
      }
    default:
      return state
  }
}
