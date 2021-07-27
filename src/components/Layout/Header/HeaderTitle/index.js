import React from 'react'
import useAuth from '../../../../hooks/useAuth'
import useClock from '../../../../hooks/useClock'
import styles from './index.module.css'

const HeaderTitle = () => {
  const { user } = useAuth()
  const { humanTime } = useClock()

  return (
    <h1 className={styles.headerTitle}>
      {humanTime}, {user ? user?.name : 'Stranger'}.
    </h1>
  )
}

export default HeaderTitle
