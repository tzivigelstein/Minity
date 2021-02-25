import React, { useContext } from 'react'
import tasksContext from '../../context/tasks/tasksContext'
import projectContext from '../../context/projects/projectContext'
import Bin from '../../Icons/Bin'
import Edit from '../../Icons/Edit'
import Times from '../../Icons/Times'
import Check from '../../Icons/Check'

const Task = ({ task }) => {
  const taskContext = useContext(tasksContext)

  const { deleteTask, getTasks, updateTask, taskExtract } = taskContext

  const projectsContext = useContext(projectContext)

  const { project } = projectsContext

  const [actualProject] = project

  //Extraccion de los valores

  const { name, state, _id } = task

  const onClickDel = id => {
    deleteTask(id, actualProject._id)
    getTasks(actualProject.id)
  }

  const onClickState = task => {
    if (state) {
      task.state = false
    } else {
      task.state = true
    }
    updateTask(task)
  }

  const selectTask = task => {
    taskExtract(task)
  }

  return (
    <li className="tarea sombra">
      <p>{name}</p>
      <div className="estado">
        {state ? (
          <button type="button" className="completo" onClick={() => onClickState(task)}>
            <Check width={16} height={16} />
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => onClickState(task)}>
            <Times width={16} height={16} />
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          style={{ borderRadius: '6px' }}
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          <Edit width={16} height={16} />
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => onClickDel(_id)}
          style={{ backgroundColor: '#e54b4b', borderRadius: '6px' }}
        >
          <Bin width={16} height={16} />
        </button>
      </div>
    </li>
  )
}

export default Task
