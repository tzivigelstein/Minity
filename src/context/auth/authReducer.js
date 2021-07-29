import useToken from '../../hooks/useToken'
import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  AUTH_USER,
  ERROR_AUTH,
  LOG_OUT,
  VISUAL_LOADING,
  LOADING,
} from '../../types'

const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case VISUAL_LOADING:
      return {
        visualLoading: true,
      }

    case LOADING:
      return {
        loading: true,
      }

    case SUCCESS_REGISTER:
    case SUCCESS_LOGIN:
      // setToken(payload.token)
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
    case ERROR_AUTH:
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

export default AuthReducer
