import React, { useState } from 'react'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import useTasks from '../../../hooks/useTasks'
import TaskChip from '../TaskChip'
import TaskChipSkeleton from '../TaskChipSkeleton'
import { Add } from '../../Icons'
import DynamicButton from '../../UI/Buttons/DynamicButton'
import Modal from '../../Modal'
import Input from '../../UI/Input'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import TertiaryButton from '../../UI/Buttons/TertiaryButton'

const TasksList = () => {
  const { actualProject } = useProjects()
  const { tasks, loading, addTask } = useTasks()

  const [isOpen, setIsOpen] = useState(false)
  const [newTask, setNewTask] = useState({ name: '', state: false, project: actualProject._id })

  const { accentColor, secondaryColor } = actualProject && actualProject.colors

  const backgrounGradient = {
    background: `linear-gradient(45deg, ${accentColor}, ${secondaryColor})`,
  }

  const handleAddNewTask = () => {
    setIsOpen(true)
  }

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
        <div className={styles.heading}>
          <span>
            {tasks && tasks.length} {tasks && tasks.length === 1 ? 'task' : 'tasks'}
          </span>
          <DynamicButton onClick={handleAddNewTask} style={backgrounGradient}>
            Add <Add className={styles.addIcon} />
          </DynamicButton>
        </div>
        {loading ? (
          <ul className={styles.tasksList}>
            <TaskChipSkeleton />
            <TaskChipSkeleton />
            <TaskChipSkeleton />
          </ul>
        ) : (
          <ul className={styles.tasksList}>
            {tasks.map(task => (
              <TaskChip key={task._id} task={task} />
            ))}
          </ul>
        )}
      </div>
      {isOpen && (
        <Modal title="Add task" description="Add task name" setIsOpen={setIsOpen}>
          <Input
            inputProps={{
              value: newTask.name,
              placeholder: 'Task name',
              onChange: handleChange,
            }}
          />
          <ButtonsContainer>
            <TertiaryButton onClick={handleDecline}>Cancel</TertiaryButton>
            <PrimaryButton onClick={handleAccept}>Add</PrimaryButton>
          </ButtonsContainer>
        </Modal>
      )}
    </>
  )
}

export default TasksList
