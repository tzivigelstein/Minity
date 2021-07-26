import { CSSTransition } from 'react-transition-group'
import styles from './index.module.css'

const ProjectCardMenu = ({ isActive }) => {
  const handleDelete = () => {
    console.log('delete')
  }

  const handleEdit = () => {
    console.log('edit')
  }

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
        <li className={styles.menuItem}>
          <button className={styles.menuButton} onClick={handleEdit}>
            Edit
          </button>
        </li>
        <li className={styles.menuItem}>
          <button className={`${styles.menuButton} ${styles.removeMenuButton}`} onClick={handleDelete}>
            Remove
          </button>
        </li>
      </ul>
    </CSSTransition>
  )
}

export default ProjectCardMenu
