import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import client from '../../config/axios'
import useToken from '../../hooks/useToken'
import setTokenAuthInHeaders from '../../config/token'
import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  AUTH_USER,
  LOG_OUT,
  VISUAL_LOADING,
  alertTypes,
} from '../../types'

const AuthState = props => {
  const [token] = useToken('token')
  const initialState = {
    token,
    isAuth: false,
    user: null,
    msg: null,
    loading: true,
    visualLoading: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  //Registro
  const signup = async info => {
    try {
      dispatch({
        type: VISUAL_LOADING,
      })
      const query = await client.post('/api/users', info)
      dispatch({
        type: SUCCESS_REGISTER,
        payload: query.data,
      })

      authUser()
    } catch (err) {
      const alerta = {
        msg: err.response.data.msg,
        category: alertTypes.alertError,
      }
      dispatch({
        type: ERROR_REGISTER,
        payload: alerta,
      })
    }
  }

  //Retorna user autenticado
  const authUser = async () => {
    if (token) {
      setTokenAuthInHeaders(token)
    }

    try {
      const query = await client.get('/api/auth')
      const { user } = query.data

      dispatch({
        type: AUTH_USER,
        payload: user,
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: ERROR_LOGIN,
      })
    }
  }

  const login = async data => {
    try {
      dispatch({
        type: VISUAL_LOADING,
      })
      const query = await client.post('/api/auth', data)
      dispatch({
        type: SUCCESS_LOGIN,
        payload: query.data,
      })
      authUser()
    } catch (error) {
      console.log(error)
      const msg = error.response.data.msg
      const alerta = {
        msg,
        category: alertTypes.alertError,
      }
      dispatch({
        type: ERROR_LOGIN,
        payload: alerta,
      })
    }
  }

  const logout = () => {
    dispatch({
      type: LOG_OUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuth: state.isAuth,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        visualLoading: state.visualLoading,
        signup,
        login,
        authUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
