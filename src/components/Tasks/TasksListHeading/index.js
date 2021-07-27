import React from 'react'
import styles from './index.module.css'
import { Add } from '../../Icons'
import DynamicButton from '../../UI/Buttons/DynamicButton'
import useProjects from '../../../hooks/useProjects'

const TasksListHeading = ({ tasks, setIsOpen }) => {
  const { actualProject } = useProjects()

  const { colors = {} } = actualProject || {}
  const { accentColor = '#1da0f2', secondaryColor = 'lightgreen' } = colors

  const backgrounGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`,
  }

  const handleAddNewTask = () => {
    setIsOpen(true)
  }

  return (
    <div className={styles.heading}>
      <span>
        {tasks && tasks.length} {tasks && tasks.length === 1 ? 'task' : 'tasks'}
      </span>
      <DynamicButton onClick={handleAddNewTask} style={backgrounGradient}>
        Add <Add className={styles.addIcon} />
      </DynamicButton>
    </div>
  )
}

export default TasksListHeading
