import React from 'react'
import styles from './index.module.css'

const SecondaryButton = props => {
  const { children } = props
  return (
    <button {...props} className={styles.secondaryButton}>
      {children}
    </button>
  )
}

export default SecondaryButton
