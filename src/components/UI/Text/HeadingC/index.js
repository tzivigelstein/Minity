import React from 'react'
import styles from './index.module.css'

const HeadingC = ({ children, muted }) => {
  return <h4 className={`${styles.headingC} ${muted && styles.muted}`}>{children}</h4>
}

export default HeadingC
