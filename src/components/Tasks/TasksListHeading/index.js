import styles from './index.module.css'
import { Add } from '../../Icons'
import DynamicButton from '../../UI/Buttons/DynamicButton'
import useProjects from '../../../hooks/useProjects'
import useTasks from '../../../hooks/useTasks'
import ActivityIndicator from '../../ActivityIndicator'

const TasksListHeading = ({ tasks, setIsOpen }) => {
  const { currentProject } = useProjects()
  const { getTasksLoading } = useTasks()

  const { colors = {} } = currentProject || {}
  const { accentColor = '#1da0f2', secondaryColor = 'lightgreen' } = colors

  const backgrounGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`
  }

  const handleAddNewTask = () => {
    setIsOpen(true)
  }

  const numberOfTasks = `${tasks && tasks.length} ${tasks && tasks.length === 1 ? 'task' : 'tasks'}`

  return (
    <div className={styles.heading}>
      <span style={{ display: 'flex', height: '1rem' }}>
        {getTasksLoading && <ActivityIndicator colorstyle="dark" />}
        {!getTasksLoading && numberOfTasks}
      </span>
      <DynamicButton onClick={handleAddNewTask} style={backgrounGradient}>
        Add <Add className={styles.addIcon} />
      </DynamicButton>
    </div>
  )
}

export default TasksListHeading
