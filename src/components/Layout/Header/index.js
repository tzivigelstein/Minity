import React from 'react'
import styles from './index.module.css'
import useAuth from '../../../hooks/useAuth'
import HeaderSkeleton from '../HeaderSkeleton'
import Clock from '../../Clock'
import HeaderTitle from './HeaderTitle'

const Header = () => {
  const { loading } = useAuth()

  return (
    <>
      {loading ? (
        <HeaderSkeleton />
      ) : (
        <header className={styles.header}>
          <HeaderTitle />
          <Clock />
        </header>
      )}
    </>
  )
}

export default Header
