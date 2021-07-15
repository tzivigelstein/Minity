import React from 'react'
import styles from './index.module.css'

const SimpleLink = ({ children }) => {
  return <a className={styles.simpleLink}>{children}</a>
}

export default SimpleLink
