import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'
import ActivityIndicator from '../../components/ActivityIndicator'
import HeadingA from '../../components/UI/Text/HeadingA'
import SimpleLink from '../../components/UI/Links/SimpleLink'
import Input from '../../components/UI/Input'
import { Check, ClosedEye, Email, Lock, OpenEye } from '../../components/Icons'
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton'
import Alert from '../../components/Alert'
import { alertTypes, EMAIL_PATTERN as emailPattern } from '../../types'
import AuthWrapper from '../../components/AuthWrapper'
import AuthContainer from '../../components/AuthContainer'

const INPUT_TYPE = {
  text: 'text',
  password: 'password',
}

const { text: typeText, password: typePassword } = INPUT_TYPE

const Login = ({ history }) => {
  const { login, isAuth, msg, visualLoading } = useAuth()
  const { alert, showAlert } = useAlert()

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const { email, password } = user

  useEffect(() => {
    if (isAuth) {
      history.push('/projects')
    } else if (msg) {
      showAlert(msg.msg, msg.category)
    }
    //eslint-disable-next-line
  }, [msg, isAuth, history])

  //Lectura de datos del form
  const handleChange = e => {
    setUser({
      ...user,
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
  }

  const isValidEmail = email => {
    return emailPattern.test(email.toLowerCase())
  }

  const handleShowPassword = e => {
    e.preventDefault()
    setIsPasswordShown(!isPasswordShown)
  }

  return (
    <AuthWrapper>
      <AuthContainer>
        {alert ? <Alert text={alert.msg} type={alert.category} /> : null}
        <div className={styles.headingContainer}>
          <HeadingA>Welcome back</HeadingA>
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
            <PrimaryButton disabled={visualLoading} onClick={handleLogin}>
              {visualLoading ? <ActivityIndicator color="verde" width={21} height={21} /> : 'Login'}
            </PrimaryButton>
          </form>
          <div className={styles.linkContainer}>
            <Link to="/signup">
              <SimpleLink>Don't have an account? Signup</SimpleLink>
            </Link>
          </div>
        </div>
      </AuthContainer>
    </AuthWrapper>
  )
}

export default Login
