import React from 'react'
import styles from './index.module.css'
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton'
import SecondaryButton from '../../components/UI/Buttons/SecondaryButton'

const Welcome = () => {
  return (
    <div className={styles.container}>
      <p>Manage your whole life in one place</p>
      <div className={styles.buttonsContainer}>
        <PrimaryButton>Login</PrimaryButton>
        <SecondaryButton>Signup</SecondaryButton>
      </div>
    </div>
  )
}

export default Welcome
