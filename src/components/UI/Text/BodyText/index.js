import React from 'react'
import styles from './index.module.css'

const BodyText = ({ children, muted }) => {
  return <p className={`${styles.bodyText} ${muted && styles.muted}`}>{children}</p>
}

export default BodyText
