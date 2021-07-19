import React, { useState } from 'react'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import ProjectChip from '../ProjectChip'
import { Add, Search } from '../../Icons'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import Input from '../../UI/Input'
import Modal from '../../Modal'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'
import TertiaryButton from '../../UI/Buttons/TertiaryButton'

const Projects = () => {
  const { projects, filteredProjects, createProject } = useProjects()
  const [isOpen, setIsOpen] = useState(false)
  const [newProject, setNewProject] = useState({ name: '' })

  const handleNewProjectModal = () => {
    setIsOpen(true)
  }

  const handleAccept = () => {
    createProject(newProject)
    setIsOpen(false)
  }

  const handleDecline = () => {
    setIsOpen(false)
  }

  const handleChange = e => {
    setNewProject({ name: e.target.value })
  }

  return (
    <>
      <div className={styles.projectsContainer}>
        <div className={styles.heading}>
          <Input
            Icon={Search}
            inputProps={{
              onChange: () => console.log('search top header'),
              placeholder: 'Search projects',
            }}
          />
          <div className={styles.buttonContainer}>
            <PrimaryButton onClick={handleNewProjectModal}>
              New <Add width={21} height={21} className={styles.addIcon} />
            </PrimaryButton>
          </div>
        </div>
        <ul className={styles.list}>
          {filteredProjects.length !== 0
            ? filteredProjects.map(project => <ProjectChip key={project._id} project={project} />)
            : projects.map(project => <ProjectChip key={project._id} project={project} />)}
        </ul>
      </div>
      {isOpen && (
        <Modal title="Create project" description="Add project name" setIsOpen={setIsOpen}>
          <Input
            inputProps={{
              onChange: handleChange,
              value: newProject.name,
              placeholder: 'Project name',
            }}
          />
          <ButtonsContainer justify="end">
            <TertiaryButton onClick={handleDecline}>Cancel</TertiaryButton>
            <PrimaryButton onClick={handleAccept}>Create</PrimaryButton>
          </ButtonsContainer>
        </Modal>
      )}
    </>
  )
}

export default Projects
