import { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'

import AuthContainer from '../components/AuthContainer'
import AuthWrapper from '../components/AuthWrapper'
import HeadingA from '../components/UI/Text/HeadingA'
import HeadingB from '../components/UI/Text/HeadingB'
import PrimaryButton from '../components/UI/Buttons/PrimaryButton'
import SecondaryButton from '../components/UI/Buttons/SecondaryButton'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Welcome = () => {
  const router = useRouter()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/projects')
    }
  }, [status])

  return (
    <>
      <Head>
        <title>Welcome Minity</title>
      </Head>
      <AuthWrapper>
        <AuthContainer>
          <div className={styles.headingContainer}>
            <HeadingA>Manage your whole life in one place</HeadingA>
            <HeadingB muted>Keep your tasks organized</HeadingB>
          </div>
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
