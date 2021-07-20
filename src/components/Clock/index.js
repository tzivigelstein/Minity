import useTime from '../../hooks/useClock'
import styles from './index.module.css'

const Clock = () => {
  const { time } = useTime()
  return <span className={styles.clock}>{time}</span>
}

export default Clock
