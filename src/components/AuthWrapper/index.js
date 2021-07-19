import React from 'react'
import styles from './index.module.css'

const AuthWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}

export default AuthWrapper
