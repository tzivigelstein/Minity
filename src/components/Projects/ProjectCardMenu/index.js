import { CSSTransition } from 'react-transition-group'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'

const ProjectCardMenu = ({ isActive, projectId }) => {
  const { removeProject } = useProjects()

  const handleRemove = e => {
    e.preventDefault()
    e.stopPropagation()
    removeProject(projectId)
    console.log('remove')
  }

  const handleEdit = e => {
    e.preventDefault()
    e.stopPropagation()
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
          <button className={`${styles.menuButton} ${styles.removeMenuButton}`} onClick={handleRemove}>
            Remove
          </button>
        </li>
      </ul>
    </CSSTransition>
  )
}

export default ProjectCardMenu
