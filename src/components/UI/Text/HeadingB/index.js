import styles from './index.module.css'

const HeadingB = ({ children, muted }) => {
  return <h3 className={`${styles.headingB} ${muted && styles.muted}`}>{children}</h3>
}

export default HeadingB
