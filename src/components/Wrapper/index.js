import React from 'react'
import styles from './index.module.css'
import Navbar from '../Layout/Navbar'
import Header from '../Layout/Header'

const Wrapper = ({ children, componentLeft }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar componentLeft={componentLeft} />
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Wrapper
