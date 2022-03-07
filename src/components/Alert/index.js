import styles from './index.module.css'
import { alertTypes } from '../../types'
import { Error } from '../Icons'

const Alert = ({ text, type }) => {
  return (
    <div className={styles.alertWrapper}>
      <div className={styles.alertContainer}>
        {text} {type === alertTypes.alertError && <Error className={styles.errorIcon} />}
      </div>
    </div>
  )
}

export default Alert
