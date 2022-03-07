import { useEffect, useState } from 'react'
import styles from './index.module.css'
import TaskChip from '../TaskChip'
import TaskChipSkeleton from '../TaskChipSkeleton'
import Modal from '../../Modal'
import Input from '../../UI/Input'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import TasksListHeading from '../TasksListHeading'
import SecondaryButton from '../../UI/Buttons/SecondaryButton'
import { useRouter } from 'next/dist/client/router'
import ActivityIndicator from '../../ActivityIndicator'
import useTasks from '../../../hooks/useTasks'
import useProjects from '../../../hooks/useProjects'

const TasksList = () => {
  const { getTasksLoading, tasks, addTask, addTaskLoading } = useTasks()
  const { currentProject } = useProjects()

  const router = useRouter()
  const { id } = router.query

  const INITIAL_NEW_TASK_STATE = {
    name: '',
    state: false,
    project: id
  }

  const [isOpen, setIsOpen] = useState(false)
  const [newTask, setNewTask] = useState(INITIAL_NEW_TASK_STATE)

  useEffect(() => {
    setIsOpen(addTaskLoading)
  }, [addTaskLoading])

  const handleChange = e => {
    setNewTask({ ...newTask, name: e.target.value })
  }

  const handleDecline = () => {
    setIsOpen(false)
  }

  const handleAccept = () => {
    addTask(newTask, currentProject.id)
    setNewTask(INITIAL_NEW_TASK_STATE)
  }

  return (
    <>
      <div className={styles.listContainer}>
        <TasksListHeading tasks={tasks} setIsOpen={setIsOpen} />

        <ul className={styles.tasksList}>
          {getTasksLoading ? (
            <>
              <TaskChipSkeleton />
              <TaskChipSkeleton />
              <TaskChipSkeleton />
            </>
          ) : (
            tasks.map(task => <TaskChip key={task.id} task={task} />)
          )}
        </ul>
      </div>

      <Modal isOpen={isOpen} title="Add task" description="Add task name" setIsOpen={setIsOpen}>
        <Input
          inputProps={{
            autoFocus: true,
            value: newTask.name,
            placeholder: 'Task name',
            onChange: handleChange
          }}
        />
        <ButtonsContainer>
          {!addTaskLoading && <SecondaryButton onClick={handleDecline}>Cancel</SecondaryButton>}
          {addTaskLoading && (
            <PrimaryButton disabled>
              Creating <ActivityIndicator />
            </PrimaryButton>
          )}
          {!addTaskLoading && <PrimaryButton onClick={handleAccept}>Add</PrimaryButton>}
        </ButtonsContainer>
      </Modal>
    </>
  )
}

export default TasksList
