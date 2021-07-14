import React, { useState, useEffect } from 'react'
import styles from './header.module.css'
import useAuth from '../../../hooks/useAuth'
import useProjects from '../../../hooks/useProjects'
import useTime from '../../../hooks/useTime'
import HeaderSkeleton from '../HeaderSkeleton'

const Header = () => {
  const { user, loading } = useAuth()
  const { actualProject } = useProjects()
  const { time, humanTime } = useTime()
  const [colors, setColors] = useState({
    accentColor: '#1da0f2',
    secondaryColor: 'lightgreen',
  })

  const headerTextColor = {
    background: `-webkit-linear-gradient(45deg, ${colors.accentColor}, ${colors.secondaryColor})`,
  }

  useEffect(() => {
    if (actualProject) {
      const { accentColor, secondaryColor } = actualProject.colors
      setColors({ ...colors, accentColor, secondaryColor })
    }
  }, [actualProject])

  return (
    <>
      {loading ? (
        <HeaderSkeleton />
      ) : (
        <header className={styles.header}>
          <h1 style={headerTextColor} className={styles.welcomeMessage}>
            {humanTime}, {user?.name}.
          </h1>
          <span className={styles.time}>{time}</span>
        </header>
      )}
    </>
  )
}

export default Header
