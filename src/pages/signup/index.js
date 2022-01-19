import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ActivityIndicator from '../../components/ActivityIndicator'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'
import { alertTypes, EMAIL_PATTERN as emailPattern } from '../../types'
import Alert from '../../components/Alert'
import BaseLink from '../../components/UI/Links/BaseLink'
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton'
import Input from '../../components/UI/Input'
import HeadingA from '../../components/UI/Text/HeadingA'
import HeadingC from '../../components/UI/Text/HeadingC'
import { Check, ClosedEye, Email, Lock, OpenEye, User } from '../../components/Icons'
import AuthWrapper from '../../components/AuthWrapper'
import AuthContainer from '../../components/AuthContainer'
import HelperText from '../../components/UI/Text/HelperText'

const INPUT_TYPE = {
  text: 'text',
  password: 'password'
}

const { text: typeText, password: typePassword } = INPUT_TYPE

const Signup = () => {
  const { msg, signup, loading, user } = useAuth()
  const { alert, showAlert } = useAlert()

  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.replace('/projects')
    } else if (msg) {
      showAlert(msg.msg, msg.category)
    }
    //eslint-disable-next-line
  }, [msg, user])

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const { name, email, password } = userData

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  //Submit del signup

  const handleSignup = e => {
    e.preventDefault()

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      showAlert('All fields are required', alertTypes.alertError)
      return
    } else if (password.length < 6) {
      showAlert('Password must contain at least 6 characters', alertTypes.alertError)
      return
    } else if (!isValidEmail(email)) {
      showAlert('Invalid email', alertTypes.alertError)
      return
    }

    signup({
      name,
      email,
      password
    })
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
        <title>Minity | Signup</title>
      </Head>
      <AuthWrapper>
        <AuthContainer>
          {alert ? <Alert text={alert.msg} type={alert.category} /> : null}
          <div className={styles.headingContainer}>
            <HeadingA>Create account</HeadingA>
            <HeadingC muted>Fill in the requested fields to create your account and minity.</HeadingC>
          </div>
          <div className={styles.formContainer}>
            <form className={styles.form}>
              <div className={styles.inputContainer}>
                <Input
                  Icon={User}
                  inputProps={{
                    type: 'text',
                    id: 'name',
                    name: 'name',
                    placeholder: 'Name',
                    value: name,
                    onChange: handleChange
                  }}
                  actionButton={
                    name.length > 3 && (
                      <button onClick={e => e.preventDefault()} className={styles.iconButton}>
                        <Check className={styles.icon} />
                      </button>
                    )
                  }
                />
              </div>

              <div className={styles.inputContainer}>
                <Input
                  Icon={Email}
                  inputProps={{
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    placeholder: 'Email',
                    value: email,
                    pattern: emailPattern,
                    onChange: handleChange
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
                    onChange: handleChange
                  }}
                  actionButton={
                    <button className={styles.iconButton} onClick={handleShowPassword}>
                      {isPasswordShown ? <ClosedEye className={styles.icon} /> : <OpenEye className={styles.icon} />}
                    </button>
                  }
                />
              </div>
              <PrimaryButton disabled={loading} onClick={handleSignup}>
                {loading ? <ActivityIndicator color="light" width={21} height={21} /> : 'Signup'}
              </PrimaryButton>

              <div className={styles.helperContainer}>
                <HelperText>
                  By registering, you are allowing the use of your provided data in this application.
                </HelperText>
              </div>
            </form>
            <div className={styles.linkContainer}>
              <Link href="/login" passHref>
                <BaseLink>Already have an account? Login</BaseLink>
              </Link>
            </div>
          </div>
        </AuthContainer>
      </AuthWrapper>
    </>
  )
}

export default Signup
