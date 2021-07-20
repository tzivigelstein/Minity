import React from 'react'
import styles from './index.module.css'

const SimpleLink = props => {
  const { children } = props
  return (
    <span className={styles.simpleLink} {...props}>
      {children}
    </span>
  )
}

export default SimpleLink
