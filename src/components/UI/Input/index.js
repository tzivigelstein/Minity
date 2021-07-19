import React from 'react'
import styles from './index.module.css'
import { Times } from '../../Icons'

const Input = ({ Icon, inputProps = { value: '' }, actionButton }) => {
  return (
    <div className={styles.inputWrapper}>
      {Icon && <Icon className={styles.icon} />}
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" {...inputProps} />
        {actionButton}
      </div>
    </div>
  )
}

export default Input
