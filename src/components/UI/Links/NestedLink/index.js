import React from 'react'
import styles from './index.module.css'

const NestedLink = ({ children }) => {
  return <div className={styles.nestedLink}>{children}</div>
}

export default NestedLink
