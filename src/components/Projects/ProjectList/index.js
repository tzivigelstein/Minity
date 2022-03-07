import React, { useState } from 'react'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import ProjectCard from '../ProjectCard'
import { Add } from '../../Icons'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import Input from '../../UI/Input'
import Modal from '../../Modal'
import ButtonsContainer from '../../UI/Buttons/ButtonsContainer'
import SecondaryButton from '../../UI/Buttons/SecondaryButton'
import Navigation from '../../Layout/Navigation/Navigation'
import ActivityIndicator from '../../ActivityIndicator'

const DEFAULT_PROJECT_NAME = { name: '' }

const Projects = () => {
  const { projects, filteredProjects, createProject } = useProjects()
  const [isOpen, setIsOpen] = useState(false)
  const [newProject, setNewProject] = useState(DEFAULT_PROJECT_NAME)

  const handleNewProjectModal = () => {
    setIsOpen(true)
  }

  const handleAccept = () => {
    createProject(newProject)
    setNewProject(DEFAULT_PROJECT_NAME)
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
      <div className={styles.container}>
        <div className={styles.heading}>
          <Navigation />
          <div className={styles.buttonContainer}>
            <PrimaryButton onClick={handleNewProjectModal}>
              New <Add width={21} height={21} className={styles.addIcon} />
            </PrimaryButton>
          </div>
        </div>
        {filteredProjects.length === 0 && projects.length === 0 && (
          <div className={styles.activityIndicatorContainer}>
            <ActivityIndicator colorstyle="dark" />
          </div>
        )}
        <ul className={styles.list}>
          {filteredProjects.length !== 0
            ? filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)
            : projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </ul>
      </div>
      <Modal title="Create project" isOpen={isOpen} description="Add project name" setIsOpen={setIsOpen}>
        <Input
          inputProps={{
            autoFocus: true,
            onChange: handleChange,
            value: newProject.name,
            placeholder: 'Project name'
          }}
        />
        <ButtonsContainer justify="end">
          <SecondaryButton onClick={handleDecline}>Cancel</SecondaryButton>
          <PrimaryButton onClick={handleAccept}>Create</PrimaryButton>
        </ButtonsContainer>
      </Modal>
    </>
  )
}

export default Projects
