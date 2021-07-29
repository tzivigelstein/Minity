import { useState } from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import HelperText from '../../UI/Text/HelperText'
import HeadingC from '../../UI/Text/HeadingC'
import { MoreVertical } from '../../Icons'
import ProjectCardMenu from '../ProjectCardMenu'

const ProjectCard = ({ project }) => {
  const { _id, name, colors = {}, date } = project
  const parsedDate = new Date(date).toLocaleDateString()
  const { accentColor = '', secondaryColor = '' } = colors
  const { setActualProject } = useProjects()

  const [projectMenuOpen, setProjectMenuOpen] = useState(false)

  const handleClick = id => {
    setActualProject(id)
  }

  const colorGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`,
  }

  const handleProjectMenu = e => {
    e.preventDefault()
    e.stopPropagation()
    setProjectMenuOpen(!projectMenuOpen)
  }

  const char = name.charAt(0).toUpperCase()

  return (
    <Link href={`/${_id}/tasks`}>
      <a onClick={() => handleClick(_id)} className={styles.projectChipContainer}>
        <button onClick={handleProjectMenu} className={styles.menuButton}>
          <MoreVertical className={styles.moreIcon} />
        </button>
        <ProjectCardMenu isActive={projectMenuOpen} projectId={_id} />
        <div className={styles.chipWrapper}>
          <div className={styles.chipHeading}>
            <div style={colorGradient} className={styles.projectColor}>
              <span className={styles.charName}>{char}</span>
            </div>
            <div className={styles.projectNameContainer}>
              <HeadingC>{name}</HeadingC>
            </div>
          </div>
          <HelperText>
            <time dateTime={parsedDate}>Created on {parsedDate}</time>
          </HelperText>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
