import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import ActivityIndicator from '../../components/ActivityIndicator'
import useAuth from '../../hooks/useAuth'
import useAlert from '../../hooks/useAlert'
import { alertTypes, EMAIL_PATTERN as emailPattern } from '../../types'
import Alert from '../../components/Alert'
import SimpleLink from '../../components/UI/Links/SimpleLink'
import PrimaryButton from '../../components/UI/Buttons/PrimaryButton'
import Input from '../../components/UI/Input'
import HeadingA from '../../components/UI/Text/HeadingA'
import { Check, ClosedEye, Email, Lock, OpenEye, User } from '../../components/Icons'

const INPUT_TYPE = {
  text: 'text',
  password: 'password',
}

const { text: typeText, password: typePassword } = INPUT_TYPE

const Signup = props => {
  const { msg, isAuth, signup, visualLoading } = useAuth()
  const { alert, showAlert } = useAlert()

  useEffect(() => {
    if (isAuth) {
      props.history.push('/projects')
    } else if (msg) {
      showAlert(msg.msg, msg.category)
    }
    //eslint-disable-next-line
  }, [msg, isAuth, props.history])

  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  })

  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const { name, email, password } = user

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
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
    <div className={styles.container}>
      {alert ? <Alert text={alert.msg} type={alert.category} /> : null}
      <div className={styles.headingContainer}>
        <HeadingA>Create account</HeadingA>
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
                onChange: handleChange,
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
          <PrimaryButton disabled={visualLoading} onClick={handleSignup}>
            {visualLoading ? <ActivityIndicator color="light" width={21} height={21} /> : 'Signup'}
          </PrimaryButton>
        </form>
        <div className={styles.linkContainer}>
          <Link to="/login">
            <SimpleLink>You have an account? Login</SimpleLink>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
