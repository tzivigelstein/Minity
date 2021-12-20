import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import useClock from '../../../../hooks/useClock'
import styles from './index.module.css'

const HeaderTitle = () => {
  const { user } = useAuth()
  const [time] = useClock()

  return (
    <h1 className={styles.headerTitle}>
      {time.humanTime}, {user ? user?.name : 'Stranger'}.
    </h1>
  )
}

export default HeaderTitle
