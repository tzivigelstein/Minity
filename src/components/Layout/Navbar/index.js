import React, { useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Logout } from '../../Icons'

const Navbar = ({ componentLeft }) => {
  const { logOut, authUser } = useAuth()

  useEffect(() => {
    authUser()
    //eslint-disable-next-line
  }, [])

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftComponentContainer}>
        {componentLeft && <Link to="/projects">{componentLeft}</Link>}
        <Link to="/">
          <h1 className={styles.titleBold}>
            MERN<span className={styles.titleLight}>Tasks</span>
          </h1>
        </Link>
      </div>
      <button onClick={logOut} className={styles.navbarButton}>
        <span className={styles.logoutText}>Logout</span>
        <Logout className={styles.logoutIcon} width={18} height={18} />
      </button>
    </nav>
  )
}

export default Navbar
