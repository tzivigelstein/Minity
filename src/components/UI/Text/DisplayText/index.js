import React from 'react'
import styles from './index.module.css'

const DisplayText = ({ children }) => {
  return <p className={styles.displayText}>{children}</p>
}

export default DisplayText
