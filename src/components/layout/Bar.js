import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'

const Bar = () => {
  //Extraccion del estado
  const authContext = useContext(AuthContext)
  const { logOut, authUser, user } = authContext

  useEffect(() => {
    authUser()
    //eslint-disable-next-line
  }, [])

  return (
    <header className="app-header">
      {user ? (
        <p className="nombre-usuario">
          Hello<span style={{ margin: '0 0.5rem' }}>{user.name}</span> 👋
        </p>
      ) : null}
      <nav className="nav-principal">
        <button data-cy="logout" className="btn btn-blank cerrar-sesion" onClick={() => logOut()}>
          Logout
        </button>
      </nav>
    </header>
  )
}

export default Bar
