import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { loading, isAuth, authUser } = useAuth()

  useEffect(() => {
    if (!isAuth) authUser()
    //eslint-disable-next-line
  }, [])

  return (
    <Route render={props => (!isAuth && !loading ? <Redirect to="/login" /> : <Component {...props} />)} {...props} />
  )
}

export default PrivateRoute
