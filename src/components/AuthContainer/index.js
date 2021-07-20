import styles from './index.module.css'

const AuthContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default AuthContainer
