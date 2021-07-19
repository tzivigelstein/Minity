import React from 'react'
import styles from './index.module.css'

const DisplayText = ({ children, muted }) => {
  return <p className={`${styles.displayText} ${muted && styles.muted}`}>{children}</p>
}

export default DisplayText
