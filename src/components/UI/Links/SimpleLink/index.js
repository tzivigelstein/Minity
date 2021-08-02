import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'

const SimpleLink = props => {
  const { children, to = '/' } = props
  return (
    <Link href={to}>
      <a className={styles.simpleLink} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default SimpleLink
