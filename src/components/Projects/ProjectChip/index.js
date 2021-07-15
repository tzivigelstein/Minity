import React from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'
import useProjects from '../../../hooks/useProjects'
import useTasks from '../../../hooks/useTasks'
import HelperText from '../../UI/Text/HelperText'
import HeadingC from '../../UI/Text/HeadingC'

const activeStyles = {
  transform: 'translateY(-.3rem)',
  boxShadow: '0 0.188rem 1.25rem 0.125rem rgb(64 62 67 / 16%)',
}

const ProjectChip = ({ project }) => {
  const { _id, name, colors, date } = project
  const parsedDate = new Date(date).toLocaleDateString()
  const { accentColor, secondaryColor } = colors

  const { actualProject, setActualProject } = useProjects()

  const actualProjectId = actualProject ? actualProject._id : null

  const history = useHistory()

  const handleClick = id => {
    setActualProject(id)
    history.push(`/${id}/tasks`)
  }

  const colorGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`,
  }

  return (
    <button
      style={actualProjectId === _id ? activeStyles : {}}
      onClick={() => handleClick(_id)}
      className={styles.projectChipContainer}
    >
      <div>
        <span></span>
      </div>
      <div className={styles.chipWrapper}>
        <div className={styles.chipHeading}>
          <div style={colorGradient} className={styles.projectColor}>
            <span className={styles.charName}>{name.charAt(0)}</span>
          </div>
          <HeadingC>{name}</HeadingC>
        </div>
        <HelperText>Created {parsedDate}</HelperText>
      </div>
    </button>
  )
}

export default ProjectChip
