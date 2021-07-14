import React from 'react'
import styles from './index.module.css'

const HelperText = ({ children }) => {
  return <p className={styles.helperText}>{children}</p>
}

export default HelperText
