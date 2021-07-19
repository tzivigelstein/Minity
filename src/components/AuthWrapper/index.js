import React from 'react'
import styles from './index.module.css'
import Navbar from '../Layout/Navbar'

const AuthWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  )
}

export default AuthWrapper
