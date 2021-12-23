import React, { useState } from 'react'
import styles from './index.module.css'
import useTasks from '../../../hooks/useTasks'
import { Bin, Edit, Check } from '../../Icons'
import Input from '../../UI/Input'
import Modal from '../../Modal'
import SecondaryButton from '../../UI/Buttons/SecondaryButton'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'

const TaskActionContainer = ({ task }) => {
  const { updateTask, deleteTask } = useTasks()

  const { id, project, name, state } = task

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [newTaskName, setNewTaskName] = useState(name)

  const handleChangeTaskState = () => {
    const newTask = {
      ...task,
      state: !state,
    }

    updateTask(newTask)
  }

  const handleEditPetition = e => {
    e.stopPropagation()
    setIsEditOpen(true)
  }

  const handleDeletePetition = e => {
    e.stopPropagation()
    setIsDeleteOpen(true)
  }

  const handleChange = e => {
    e.stopPropagation()
    setNewTaskName(e.target.value)
  }

  const handleClean = () => {
    setNewTaskName('')
  }

  const handleAcceptEdit = () => {
    updateTask({ ...task, name: newTaskName })
    setIsEditOpen(false)
  }

  const handleDeclineEdit = () => {
    setIsEditOpen(false)
  }

  const handleAcceptDelete = () => {
    deleteTask(id, project)
    console.log(task)
    setIsEditOpen(false)
  }

  const handleDeclineDelete = () => {
    setIsDeleteOpen(false)
  }

  return (
    <>
      <div className={styles.taskActionsContainer}>
        <input
          className={styles.inputCheckbox}
          onChange={handleChangeTaskState}
          type="checkbox"
          name="checkbox"
          id={id}
          checked={state}
        />
        <label className={`${styles.checkbox} ${state && styles.activeCheckbox}`} htmlFor={id}>
          {state && <Check className={styles.checkIcon} />}
        </label>
        <button onClick={handleEditPetition} className={styles.iconContainer}>
          <Edit className={styles.actionIcon} width={21} height={21} />
        </button>
        <button onClick={handleDeletePetition} className={styles.iconContainer}>
          <Bin className={styles.actionIcon} width={21} height={21} />
        </button>
      </div>

      <Modal isOpen={isEditOpen} title="Edit task" description="Change task name" setIsOpen={setIsEditOpen}>
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
          <SecondaryButton onClick={handleDeclineEdit}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleAcceptEdit}>Edit</PrimaryButton>
        </ButtonsContainer>
      </Modal>

      <Modal
        isOpen={isDeleteOpen}
        title="Delete task"
        description="Are you sure you want to delete?"
        setIsOpen={setIsDeleteOpen}
      >
        <ButtonsContainer justify="end">
          <SecondaryButton onClick={handleDeclineDelete}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleAcceptDelete}>Delete</PrimaryButton>
        </ButtonsContainer>
      </Modal>
    </>
  )
}

export default TaskActionContainer
