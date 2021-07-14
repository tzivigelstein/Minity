import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const PrivateRoute = ({ component: Component, ...props }) => {
  const { auth, loading, authUser } = useAuth()

  useEffect(() => {
    authUser()
    //eslint-disable-next-line
  }, [])

  return <Route {...props} render={props => (!auth && !loading ? <Redirect to="/" /> : <Component {...props} />)} />
}

export default PrivateRoute
