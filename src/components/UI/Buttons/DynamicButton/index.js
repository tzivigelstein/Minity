import React from 'react'
import styles from './index.module.css'

const DynamicButton = props => {
  const { style, children } = props
  return (
    <button style={style} className={styles.dynamicButton}>
      {children}
    </button>
  )
}

export default DynamicButton
