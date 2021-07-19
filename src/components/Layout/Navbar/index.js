import React from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Logout } from '../../Icons'

const Navbar = ({ componentLeft }) => {
  const { isAuth, logout } = useAuth()

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftComponentContainer}>
        {componentLeft && <Link to="/projects">{componentLeft}</Link>}
        <Link to="/projects">
          <h1 className={styles.titleBold}>minity</h1>
        </Link>
      </div>
      {isAuth && (
        <button onClick={logout} className={styles.navbarButton}>
          <span className={styles.logoutText}>Logout</span>
          <Logout className={styles.logoutIcon} width={18} height={18} />
        </button>
      )}
    </nav>
  )
}

export default Navbar
