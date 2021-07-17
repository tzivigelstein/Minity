import React from 'react'
import styles from './index.module.css'

const SimpleLink = ({ children }) => {
  return <span className={styles.simpleLink}>{children}</span>
}

export default SimpleLink
