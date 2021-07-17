import React from 'react'
import styles from './index.module.css'

const HeadingA = ({ children }) => {
  return <h1 className={styles.headingA}>{children}</h1>
}

export default HeadingA
