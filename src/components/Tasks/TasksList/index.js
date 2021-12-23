import React, { useState } from 'react'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import useTasks from '../../../hooks/useTasks'
import TaskChip from '../TaskChip'
import TaskChipSkeleton from '../TaskChipSkeleton'
import Modal from '../../Modal'
import Input from '../../UI/Input'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import TasksListHeading from '../TasksListHeading'
import SecondaryButton from '../../UI/Buttons/SecondaryButton'

const TasksList = () => {
  const { actualProject } = useProjects()
  const { tasks, loading, addTask } = useTasks()

  const intialNewTaskState = {
    name: '',
    state: false,
    project: actualProject?.id,
  }

  const [isOpen, setIsOpen] = useState(false)
  const [newTask, setNewTask] = useState(intialNewTaskState)

  const handleChange = e => {
    setNewTask({ ...newTask, name: e.target.value })
  }

  const handleDecline = () => {
    setIsOpen(false)
  }

  const handleAccept = () => {
    addTask(newTask)
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.listContainer}>
        <TasksListHeading tasks={tasks} setIsOpen={setIsOpen} />

        <ul className={styles.tasksList}>
          {loading ? (
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
            value: newTask.name,
            placeholder: 'Task name',
            onChange: handleChange,
          }}
        />
        <ButtonsContainer>
          <SecondaryButton onClick={handleDecline}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleAccept}>Add</PrimaryButton>
        </ButtonsContainer>
      </Modal>
    </>
  )
}

export default TasksList
