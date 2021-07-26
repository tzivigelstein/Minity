import { CSSTransition } from 'react-transition-group'
import styles from './index.module.css'

const ProjectCardMenu = ({ isActive }) => {
  return (
    <CSSTransition
      classNames={{
        enter: styles.menuListEnter,
        enterActive: styles.menuListEnterActive,
        exitActive: styles.menuListExitActive,
      }}
      in={isActive}
      timeout={100}
      unmountOnExit
    >
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Edit</li>
        <li className={`${styles.menuItem} ${styles.warningMenuItem}`}>Remove</li>
      </ul>
    </CSSTransition>
  )
}

export default ProjectCardMenu
