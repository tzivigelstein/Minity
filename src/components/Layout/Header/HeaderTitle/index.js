import React, { useEffect } from 'react'
import useAuth from '../../../../hooks/useAuth'
import useClock from '../../../../hooks/useClock'
import styles from './index.module.css'

const HeaderTitle = () => {
  const { user } = useAuth()
  const [time, unsuscribe] = useClock()

  useEffect(() => {
    return () => unsuscribe()
  }, [])

  return (
    <h1 className={styles.headerTitle}>
      {time.humanTime}, {user ? user?.name : 'Stranger'}.
    </h1>
  )
}

export default HeaderTitle
