import React from 'react'
import styles from './index.module.css'
import useProjects from '../../../hooks/useProjects'
import ProjectChip from '../ProjectChip'
import { Add, Search } from '../../Icons'
import PrimaryButton from '../../UI/Buttons/PrimaryButton'
import Input from '../../UI/Input'

const Projects = () => {
  const { projects, filteredProjects } = useProjects()

  return (
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
          <PrimaryButton>
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
  )
}

export default Projects
