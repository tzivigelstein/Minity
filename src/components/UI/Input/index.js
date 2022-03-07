import styles from './index.module.css'

const Input = ({ Icon, inputProps = { value: '' }, actionButton }) => {
  return (
    <div className={styles.inputWrapper}>
      {Icon && (
        <label style={{ display: 'flex' }} htmlFor={inputProps.id}>
          <Icon className={styles.icon} />
        </label>
      )}
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" {...inputProps} />
        {actionButton}
      </div>
    </div>
  )
}

export default Input
