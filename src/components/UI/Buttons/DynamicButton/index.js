import React from 'react'
import styles from './index.module.css'

const DynamicButton = props => {
  const { children } = props
  return (
    <button {...props} className={styles.dynamicButton}>
      {children}
    </button>
  )
}

export default DynamicButton
