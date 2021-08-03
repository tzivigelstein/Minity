import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import useAuth from '../../../hooks/useAuth'
import { Logout } from '../../Icons'

const Navbar = ({ title = '', componentLeft }) => {
  const { user, logout } = useAuth()
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftContainer}>
        {componentLeft && (
          <div className={styles.leftComponentContainer}>
            <Link href="/projects">{componentLeft}</Link>
          </div>
        )}
        <Link href="/projects">
          <h1 className={styles.title}>{title}</h1>
        </Link>
      </div>
      {user && (
        <button onClick={logout} className={styles.navbarButton}>
          <span className={styles.logoutText}>Logout</span>
          <Logout className={styles.logoutIcon} width={18} height={18} />
        </button>
      )}
    </nav>
  )
}

export default Navbar
