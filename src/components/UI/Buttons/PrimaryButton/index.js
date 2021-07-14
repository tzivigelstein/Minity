import React from 'react'
import styles from './index.module.css'

const PrimaryButton = props => {
  const { children } = props
  return (
    <button className={styles.primaryButton} {...props}>
      {children}
    </button>
  )
}

export default PrimaryButton
