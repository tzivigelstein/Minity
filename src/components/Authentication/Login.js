import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import AlertContext from '../../context/alerts/alertContext'
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator'

const Login = props => {
  const { logIn, msg, auth, visualLoading } = useAuth()

  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  useEffect(() => {
    if (auth) {
      props.history.push('/projects')
    } else if (msg) {
      showAlert(msg.msg, msg.category)
    }
    //eslint-disable-next-line
  }, [msg, auth, props.history])

  //State de inicio de sesión
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  //Extraer del state user
  const { email, password } = user

  //Lectura de datos del form
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  //Submit del login
  const onSubmit = e => {
    e.preventDefault()
    //Validacion de los datos
    if (email.trim() === '' || password.trim() === '') {
      showAlert('All fields are required', 'alerta-error')
      return
    }
    //Pasarlo al action
    logIn({
      email,
      password,
    })
  }

  return (
    <div className="form-usuario">
      {alert ? (
        <div data-cy="alert" className={`alerta ${alert.category}`}>
          {alert.msg}
        </div>
      ) : null}
      <div className="contenedor-form sombra">
        <h1 data-cy="titulo">
          Welcome
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <form data-cy="form-login" onSubmit={onSubmit}>
          <div className="campo-form">
            <input
              data-cy="email-input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              data-cy="password-input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <button data-cy="submit-login" type="submit" className="btn btn-primario btn-block">
              {visualLoading ? <ActivityIndicator width={16} height={16} /> : 'Login'}
            </button>
          </div>
        </form>
        <Link data-cy="get-account" to="/signup" className="enlace-cuenta">
          Don't have an account?. Signup
        </Link>
      </div>
    </div>
  )
}

export default Login
