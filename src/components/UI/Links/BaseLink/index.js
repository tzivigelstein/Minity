import { forwardRef } from 'react'
import styles from './index.module.css'

//eslint-disable-next-line
const BaseLink = forwardRef(({ children, href }, ref) => (
  <a href={href} ref={ref} className={styles.baseLink}>
    {children}
  </a>
))

export default BaseLink
