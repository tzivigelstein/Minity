import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'
import ActivityIndicator from '../../components/ActivityIndicator'
import HeadingA from '../../components/UI/Text/HeadingA'
import HeadingC from '../../components/UI/Text/HeadingC'
import SimpleLink from '../../components/UI/Links/SimpleLink'
import Input from '../../components/UI/Input'
import { Check, ClosedEye, Email, Lock, OpenEye } from '../../components/Icons'
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton'
import Alert from '../../components/Alert'
import { alertTypes, EMAIL_PATTERN as emailPattern } from '../../types'
import AuthWrapper from '../../components/AuthWrapper'
import AuthContainer from '../../components/AuthContainer'
import HelperText from '../../components/UI/Text/HelperText'

const INPUT_TYPE = {
  text: 'text',
  password: 'password',
}

const { text: typeText, password: typePassword } = INPUT_TYPE

const Login = () => {
  const { msg, loading, login, authUser, user } = useAuth()
  const { alert, showAlert } = useAlert()

  const router = useRouter()

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userData

  useEffect(() => {
    if (user) {
      router.replace('/projects')
    } else if (msg) {
      showAlert(msg.msg, msg.category)
    }
    //eslint-disable-next-line
  }, [msg, user])

  //Lectura de datos del form
  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  //Submit del login
  const handleLogin = e => {
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      showAlert('All fields are required', alertTypes.alertError)
      return
    }

    login({
      email,
      password,
    })

    authUser()
  }

  const isValidEmail = email => {
    return emailPattern.test(email.toLowerCase())
  }

  const handleShowPassword = e => {
    e.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }

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
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.inputContainer}>
                <Input
                  Icon={Email}
                  inputProps={{
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    value: email,
                    onChange: handleChange,
                  }}
                  actionButton={
                    isValidEmail(email) && (
                      <button onClick={e => e.preventDefault()} className={styles.iconButton}>
                        <Check className={styles.icon} />
                      </button>
                    )
                  }
                />
              </div>
              <div className={styles.inputContainer}>
                <Input
                  Icon={Lock}
                  inputProps={{
                    type: isPasswordShown ? typeText : typePassword,
                    id: 'password',
                    name: 'password',
                    placeholder: 'Password',
                    value: password,
                    onChange: handleChange,
                  }}
                  actionButton={
                    <button className={styles.iconButton} onClick={handleShowPassword}>
                      {isPasswordShown ? <ClosedEye className={styles.icon} /> : <OpenEye className={styles.icon} />}
                    </button>
                  }
                />
              </div>
              <PrimaryButton disabled={loading} onClick={handleLogin}>
                {loading ? <ActivityIndicator color="verde" width={21} height={21} /> : 'Login'}
              </PrimaryButton>
              <div className={styles.helperContainer}>
                <HelperText>Session lasts 5 hours. You can then login again.</HelperText>
              </div>
            </form>
            <div className={styles.linkContainer}>
              <SimpleLink to="/signup">New here? Create an account</SimpleLink>
            </div>
          </div>
        </AuthContainer>
      </AuthWrapper>
    </>
  )
}

export default Login
