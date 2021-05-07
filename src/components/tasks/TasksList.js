import React, { useContext } from 'react'
import Task from './Task'
import projectContext from '../../context/projects/projectContext'
import tasksContext from '../../context/tasks/tasksContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Bin from '../../Icons/Bin'
import './TaskList.css'

const TasksList = () => {
  const taskContext = useContext(tasksContext)

  const { tasksproject } = taskContext

  //Obtener state del context

  const { project, deleteProject } = useContext(projectContext)

  //Se extrae el valor desde el array project

  if (!project)
    return (
      <>
        <h2 className="select-project" data-cy="select-project">
          Select a project
        </h2>
        <div className="pick_project_container">
          <img style={{ width: '100%' }} src="/pick-project.svg" alt="Pick project" />
        </div>
      </>
    )

  const [actualProject] = project

  const onClick = () => {
    deleteProject(actualProject._id)
  }

  return (
    <>
      <h2 style={{ margin: '2rem', marginTop: 0 }}>Project {actualProject.name}</h2>
      {tasksproject.length === 0 ? (
        <div className="no_tasks_container">
          <p className="no_tasks_text">Ops... No tasks! Try adding a new one.</p>
          <img className="no_tasks_image" src="/todo.svg" alt="" />
        </div>
      ) : (
        <ul className="listado-tareas">
          {tasksproject.map(task => (
            <div key={task._id} classNames="tarea">
              <Task task={task} />
            </div>
          ))}
        </ul>
      )}

      <button type="button" className="btn btn-eliminar" onClick={onClick}>
        {actualProject.name} <Bin style={{ marginLeft: '0.5rem' }} width={16} height={16} />
      </button>
    </>
  )
}

export default TasksList
