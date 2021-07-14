import React from 'react'
import styles from './index.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.welcomeMessage}></div>
      <div className={styles.time}></div>
    </header>
  )
}

export default Header
