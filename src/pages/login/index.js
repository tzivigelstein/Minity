import { useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'
import HeadingA from '../../components/UI/Text/HeadingA'
import HeadingC from '../../components/UI/Text/HeadingC'
import Alert from '../../components/Alert'
import AuthWrapper from '../../components/AuthWrapper'
import AuthContainer from '../../components/AuthContainer'
import { useSession, signIn } from 'next-auth/react'
import GithubSignInButton from '../../components/GithubSignInButton'

const Login = () => {
  const { msg } = useAuth()
  const { alert, showAlert } = useAlert()

  const { data: session } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.replace('/projects')
    } else if (msg) {
      showAlert(msg.msg, msg.category)
    }
    //eslint-disable-next-line
  }, [msg, session])

  return (
    <>
      <Head>
        <title>Minity | Login</title>
      </Head>
      <AuthWrapper>
        <AuthContainer>
          {alert ? <Alert text={alert.msg} type={alert.category} /> : null}
          <div className={styles.headingContainer}>
            <HeadingA>Welcome back</HeadingA>
            <HeadingC muted>Login and start from where you left it.</HeadingC>
            <GithubSignInButton onClick={signIn} title="Login with Github" />
          </div>
        </AuthContainer>
      </AuthWrapper>
    </>
  )
}

export default Login
