import styles from './index.module.css'
import { Add } from '../../Icons'
import DynamicButton from '../../UI/Buttons/DynamicButton'
import useProjects from '../../../hooks/useProjects'
import useTasks from '../../../hooks/useTasks'
import ActivityIndicator from '../../ActivityIndicator'

export const DEFAULT_TASKS_ORDER = {
  LATEST: 'LATEST',
  DONE: 'DONE',
  TODO: 'TODO'
}

const TasksListHeading = ({ tasks, setIsOpen }) => {
  const { currentProject } = useProjects()
  const { getTasksLoading, setTasksListOrder } = useTasks()

  const { colors = {} } = currentProject || {}
  const { accentColor = '#1da0f2', secondaryColor = 'lightgreen' } = colors

  const backgrounGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`
  }

  const handleAddNewTask = () => {
    setIsOpen(true)
  }

  const numberOfTasks = `${tasks && tasks.length} ${tasks && tasks.length === 1 ? 'task' : 'tasks'}`

  function handleSelectChange(e) {
    setTasksListOrder({ order: e.target.value })
  }

  return (
    <div className={styles.heading}>
      <div className={styles.selectContainer}>
        <select
          onChange={handleSelectChange}
          className={styles.select}
          defaultValue={DEFAULT_TASKS_ORDER.ALL}
          name=""
          id=""
        >
          <option value={DEFAULT_TASKS_ORDER.LATEST}>Latest</option>
          <option value={DEFAULT_TASKS_ORDER.DONE}>Done</option>
          <option value={DEFAULT_TASKS_ORDER.TODO}>To do</option>
        </select>
      </div>

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
