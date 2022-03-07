import { forwardRef } from 'react'
import styles from './index.module.css'

// eslint-disable-next-line react/display-name
const BaseLink = forwardRef(({ children, href, onClick }, ref) => (
  <a onClick={onClick} href={href} ref={ref} className={styles.baseLink}>
    {children}
  </a>
))

export default BaseLink
