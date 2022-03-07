import styles from './index.module.css'

const ButtonsContainer = ({ children, justify = 'center' }) => {
  const style = {
    start: {
      justifyContent: 'flex-start'
    },
    center: {
      justifyContent: 'center'
    },
    end: {
      justifyContent: 'flex-end'
    }
  }

  return (
    <div style={style[justify]} className={styles.buttonsContainer}>
      {children}
    </div>
  )
}

export default ButtonsContainer
