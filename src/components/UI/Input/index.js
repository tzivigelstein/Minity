import React from 'react'
import styles from './index.module.css'
import { Times } from '../../Icons'

const Input = ({ icon, inputProps, cleanButtonProps }) => {
  const { value = '' } = inputProps

  return (
    <div className={styles.inputWrapper}>
      {icon}
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" {...inputProps} />
        {value.length !== 0 && (
          <button {...cleanButtonProps} className={styles.timesButton}>
            <Times width={18} height={18} className={styles.timesIcon} />
          </button>
        )}
      </div>
    </div>
  )
}

export default Input
