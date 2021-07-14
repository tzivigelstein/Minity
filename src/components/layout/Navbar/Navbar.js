import React, { useEffect } from 'react'
import { Logout } from '../../Icons'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const Navbar = () => {
  const { logOut, authUser } = useAuth()

  useEffect(() => {
    authUser()
    //eslint-disable-next-line
  }, [])
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1 className={styles.titleBold}>
          MERN<span className={styles.titleLight}>Tasks</span>
        </h1>
      </Link>
      <button onClick={logOut} className={styles.navbarButton}>
        <span className={styles.logoutText}>Logout</span>
        <Logout className={styles.logoutIcon} width={18} height={18} />
      </button>
    </nav>
  )
}

export default Navbar
