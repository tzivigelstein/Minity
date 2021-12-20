import useTime from '../../hooks/useClock'
import styles from './index.module.css'

const Clock = () => {
  const [time] = useTime()
  return (
    <time dateTime={time.time} className={styles.clock}>
      {time.time}
    </time>
  )
}

export default Clock
