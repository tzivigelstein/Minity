import React from 'react'
import styles from './index.module.css'
import useAuth from '../../../hooks/useAuth'
import HeaderSkeleton from '../HeaderSkeleton'
import Clock from '../../Clock'
import HeaderTitle from './HeaderTitle'

const Header = () => {
  const { isAuth } = useAuth()

  return (
    <>
      {isAuth ? (
        <header className={styles.header}>
          <HeaderTitle />
          <Clock />
        </header>
      ) : (
        <HeaderSkeleton />
      )}
    </>
  )
}

export default Header
