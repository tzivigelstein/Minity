import React from 'react'
import styles from './index.module.css'

const TertiaryButton = props => {
  const { children } = props
  return (
    <button className={styles.tertiaryButton} {...props}>
      {children}
    </button>
  )
}

export default TertiaryButton
