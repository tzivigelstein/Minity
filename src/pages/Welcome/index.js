import React from 'react'
import styles from './index.module.css'
import AuthWrapper from '../../components/AuthWrapper'
import AuthContainer from '../../components/AuthContainer'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton'
import SecondaryButton from '../../components/UI/Buttons/SecondaryButton'
import HeadingA from '../../components/UI/Text/HeadingA'
import HeadingB from '../../components/UI/Text/HeadingB'

const Welcome = () => {
  return (
    <AuthWrapper>
      <AuthContainer>
        <div className={styles.headingContainer}>
          <HeadingA>MERNTasks</HeadingA>
          <HeadingB>Manage your whole life in one place</HeadingB>
        </div>
        <div className={styles.buttonsContainer}>
          <Link to="/login">
            <PrimaryButton>Login</PrimaryButton>
          </Link>
          <Link to="/signup">
            <SecondaryButton>Signup</SecondaryButton>
          </Link>
        </div>
      </AuthContainer>
    </AuthWrapper>
  )
}

export default Welcome
