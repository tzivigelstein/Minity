import React, { useContext, useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import { Logout } from '../Icons'

const Bar = () => {
  const { logOut, authUser, user } = useAuth()

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
          <Logout width={16} height={16} />
        </button>
      </nav>
    </header>
  )
}

export default Bar
