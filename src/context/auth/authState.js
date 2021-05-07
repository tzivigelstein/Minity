import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'
import client from '../../config/axios'
import tokenAuth from '../../config/token'
import {
  SUCCESS_REGISTER,
  ERROR_REGISTER,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  GET_USER,
  LOG_OUT,
  VISUAL_LOADING,
} from '../../types/index'

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    auth: null,
    user: null,
    msg: null,
    loading: true,
    visualLoading: false,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  //Registro
  const registerUser = async info => {
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
        category: 'alerta-error',
      }
      dispatch({
        type: ERROR_REGISTER,
        payload: alerta,
      })
    }
  }

  //Retorna user autenticado
  const authUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      //Funcion para enviar el token por headers
      tokenAuth(token)
    }

    try {
      const query = await client.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: query.data.user,
      })
    } catch (err) {
      console.log(err)
      dispatch({
        type: ERROR_LOGIN,
      })
    }
  }

  //Login
  const logIn = async info => {
    try {
      dispatch({
        type: VISUAL_LOADING,
      })
      const query = await client.post('/api/auth', info)
      dispatch({
        type: SUCCESS_LOGIN,
        payload: query.data,
      })
      authUser()
    } catch (err) {
      console.log(err)
      const alerta = {
        msg: err?.response ? err.response.data.msg : 'Error - Connection timeout',
        category: 'alerta-error',
      }
      dispatch({
        type: ERROR_LOGIN,
        payload: alerta,
      })
    }
  }

  //Cerrar sesion
  const logOut = () => {
    dispatch({
      type: LOG_OUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        visualLoading: state.visualLoading,
        registerUser,
        logIn,
        authUser,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
