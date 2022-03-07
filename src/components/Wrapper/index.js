import styles from './index.module.css'
import Navbar from '../Layout/Navbar'
import Header from '../Layout/Header'

const Wrapper = ({ children, componentLeft, title }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar title={title} componentLeft={componentLeft} />
      <div className={styles.container}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Wrapper
