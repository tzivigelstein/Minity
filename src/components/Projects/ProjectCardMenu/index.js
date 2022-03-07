import { CSSTransition } from 'react-transition-group'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import ActivityIndicator from '../../ActivityIndicator'

const ProjectCardMenu = ({ isActive, projectId }) => {
  const { removeProject, removeProjectLoading } = useProjects()

  const handleRemove = e => {
    e.preventDefault()
    e.stopPropagation()
    removeProject(projectId)
  }

  const handleEdit = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <CSSTransition
      classNames={{
        enter: styles.menuListEnter,
        enterActive: styles.menuListEnterActive,
        exitActive: styles.menuListExitActive
      }}
      in={isActive}
      timeout={100}
      unmountOnExit
    >
      <ul className={styles.menuList}>
        {/*    <li className={styles.menuItem}>
          <button disabled={removeProjectLoading} className={styles.menuButton} onClick={handleEdit}>
            Edit
          </button>
        </li> */}
        <li className={styles.menuItem}>
          <button
            disabled={removeProjectLoading}
            className={`${styles.menuButton} ${styles.removeMenuButton}`}
            onClick={handleRemove}
          >
            {removeProjectLoading ? 'Removing' : 'Remove'}
            {removeProjectLoading && <ActivityIndicator width={16} height={16} colorstyle="dark" />}
          </button>
        </li>
      </ul>
    </CSSTransition>
  )
}

export default ProjectCardMenu
