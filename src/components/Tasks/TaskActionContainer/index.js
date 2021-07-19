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
  const { _id, name, state } = task

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

  const handleChange = e => {
    setNewTaskName(e.target.value)
  }

  const handleClean = () => {
    setNewTaskName('')
  }

  return (
    <>
      <div className={styles.taskActionsContainer}>
        <input className={styles.inputCheckbox} type="checkbox" name="checkbox" id={_id} checked={state} />
        <label
          onClick={handleChangeTaskState}
          className={`${styles.checkbox} ${state && styles.activeCheckbox}`}
          htmlFor={_id}
        >
          {state && <Check className={styles.checkIcon} />}
        </label>

        <button onClick={handleEdit} className={styles.iconContainer}>
          <Edit className={styles.actionIcon} width={21} height={21} />
        </button>
        <button className={styles.iconContainer}>
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
              onChange: handleChange,
              value: newTaskName,
              placeholder: 'Task name',
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
