import React from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'

import AuthContainer from '../components/AuthContainer'
import AuthWrapper from '../components/AuthWrapper'
import Demo from '../components/Demo'
import HeadingA from '../components/UI/Text/HeadingA'
import HeadingB from '../components/UI/Text/HeadingB'
import PrimaryButton from '../components/UI/Buttons/PrimaryButton'
import SecondaryButton from '../components/UI/Buttons/SecondaryButton'

const Welcome = () => {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <AuthWrapper>
        <AuthContainer>
          <div className={styles.headingContainer}>
            <HeadingA>Manage your whole life in one place</HeadingA>
            <HeadingB muted>Keep your tasks organized</HeadingB>
          </div>

          <Demo />

          <div className={styles.buttonsContainer}>
            <Link href="/login">
              <PrimaryButton>Login</PrimaryButton>
            </Link>
            <Link href="/signup">
              <SecondaryButton>Signup</SecondaryButton>
            </Link>
          </div>
        </AuthContainer>
      </AuthWrapper>
    </>
  )
}

export default Welcome
