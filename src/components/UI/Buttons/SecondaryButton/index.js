import React from 'react'
import styles from './index.module.css'

const SecondaryButton = ({ children }) => {
  return <button className={styles.secondaryButton}>{children}</button>
}

export default SecondaryButton
