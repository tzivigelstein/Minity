import styles from './index.module.css'

const HeadingA = ({ children, muted }) => {
  return <h1 className={`${styles.headingA} ${muted && styles.muted}`}>{children}</h1>
}

export default HeadingA
