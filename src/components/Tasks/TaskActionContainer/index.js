import React, { useState } from 'react'
import styles from './index.module.css'
import useTasks from '../../../hooks/useTasks'
import { Bin, Edit, Check, Times } from '../../Icons'
import Input from '../../UI/Input'
import Modal from '../../Modal'
import TertiaryButton from '../../UI/Buttons/TertiaryButton'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'

const disabledState = { fontSize: 0, margin: 0, opacity: 0 }

const TaskActionContainer = ({ task }) => {
  const { updateTask, selectedTask, setSelectedTask } = useTasks()
  const { name, state } = task

  const [isOpen, setIsOpen] = useState(false)
  const [newTaskName, setNewTaskName] = useState(name)

  const handleChangeTaskState = () => {
    const newTask = {
      ...task,
      state: !state,
    }

    updateTask(newTask)
  }

  const handleEdit = () => {
    setIsOpen(true)
    setSelectedTask(task)
  }

  const handleAccept = () => {
    updateTask({ ...selectedTask, name: newTaskName })
    setIsOpen(false)
  }

  const handleDecline = () => {
    setIsOpen(false)
  }

  const handleKeyUp = e => {
    e.preventDefault()
    if (e.key === 'Enter') handleAccept(newTaskName)
  }

  const handleChange = e => {
    setNewTaskName(e.target.value)
  }

  const handleClean = () => {
    setNewTaskName('')
  }

  return (
    <>
      <div className={styles.taskActionsContainer}>
        <button onClick={handleChangeTaskState} className={`${styles.iconContainer} ${state && styles.checkState}`}>
          {state ? (
            <Check className={styles.actionIcon} width={21} height={21} />
          ) : (
            <Times onClick={handleChangeTaskState} className={styles.actionIcon} width={21} height={21} />
          )}
          <span style={state ? {} : disabledState} className={styles.actionIconText}>
            Done
          </span>
        </button>

        <button onClick={handleEdit} className={styles.editButton}>
          <Edit className={styles.actionIcon} width={21} height={21} />
        </button>
        <button className={styles.deleteButton}>
          <Bin className={styles.actionIcon} width={21} height={21} />
        </button>
      </div>
      {isOpen && (
        <Modal title="Edit task" description="Change task name" setIsOpen={setIsOpen}>
          <Input
            cleanButtonProps={{
              onClick: handleClean,
            }}
            inputProps={{
              onKeyUp: handleKeyUp,
              onChange: handleChange,
              value: newTaskName,
              placeholder: 'Edit task',
            }}
          />
          <ButtonsContainer justify="end">
            <TertiaryButton onClick={handleDecline}>Cancel</TertiaryButton>
            <PrimaryButton onClick={handleAccept}>Edit</PrimaryButton>
          </ButtonsContainer>
        </Modal>
      )}
    </>
  )
}

export default TaskActionContainer
