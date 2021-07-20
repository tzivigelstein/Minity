import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
import useAuth from '../../../hooks/useAuth'
import { Logout } from '../../Icons'

const Navbar = ({ componentLeft }) => {
  const { isAuth, logout } = useAuth()

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftComponentContainer}>
        {componentLeft && <Link href="/projects">{componentLeft}</Link>}
        <Link href="/projects">
          <h1 className={styles.title}>minity</h1>
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
