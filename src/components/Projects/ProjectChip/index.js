import React from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'
import useProjects from '../../../hooks/useProjects'
import HelperText from '../../UI/Text/HelperText'
import HeadingC from '../../UI/Text/HeadingC'

const ProjectChip = ({ project }) => {
  const { _id, name, colors = {}, date } = project
  const parsedDate = new Date(date).toLocaleDateString()
  const { accentColor = '', secondaryColor = '' } = colors

  const { setActualProject } = useProjects()

  const history = useHistory()

  const handleClick = id => {
    setActualProject(id)
    history.push(`/${id}/tasks`)
  }

  const colorGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`,
  }

  return (
    <button onClick={() => handleClick(_id)} className={styles.projectChipContainer}>
      <div className={styles.chipWrapper}>
        <div className={styles.chipHeading}>
          <div style={colorGradient} className={styles.projectColor}>
            <span className={styles.charName}>{name.charAt(0)}</span>
          </div>
          <div className={styles.projectNameContainer}>
            <HeadingC>{name}</HeadingC>
          </div>
        </div>
        <HelperText>Created on {parsedDate}</HelperText>
      </div>
    </button>
  )
}

export default ProjectChip
