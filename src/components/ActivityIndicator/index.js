import styles from './index.module.css'

const ActivityIndicator = props => {
  const { colorstyle } = props

  const activeClass = colorstyle === 'dark' ? styles.dark : styles.light

  return (
    <svg className={styles.svg} viewBox="25 25 50 50">
      <circle {...props} className={`${styles.circle} ${activeClass}`} cx="50" cy="50" r="20"></circle>
    </svg>
  )
}

export default ActivityIndicator
