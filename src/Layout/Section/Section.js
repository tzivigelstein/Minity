import styles from './section.module.css'
import Projects from '../../Projects/ProjectList'
import TaskList from '../../Tasks/TasksList'
import useProjects from '../../../hooks/useProjects'

const Section = () => {
  const { currentProject } = useProjects()

  return (
    <section className={styles.section}>
      <Projects />
      {currentProject && <TaskList />}
    </section>
  )
}

export default Section
