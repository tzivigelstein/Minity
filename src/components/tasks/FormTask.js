import React, { useContext, useState, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import tasksContext from '../../context/tasks/tasksContext'
import Add from '../../Icons/Add'
import './FormTask.css'

const FormTask = () => {
  const [task, setTask] = useState({
    name: '',
    projectId: null,
    state: false,
  })

  const { name } = task

  //Obtener state del context

  const taskContext = useContext(tasksContext)

  const { selectedtask, taskerror, addTask, showError, getTasks, updateTask } = taskContext

  const projectsContext = useContext(projectContext)

  const { project } = projectsContext

  useEffect(() => {
    if (selectedtask !== null) {
      setTask(selectedtask)
    } else {
      setTask({
        name: '',
      })
    }
  }, [selectedtask])

  if (!project) return null

  const [actualProject] = project

  const onChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = e => {
    e.preventDefault()

    if (name.trim() === '') {
      showError()
      return
    }

    if (selectedtask === null) {
      task.project = actualProject._id
      addTask(task)
    } else {
      updateTask(task)
    }

    //Obtencion de las tareas nuevas

    getTasks(actualProject._id)

    //Reinicio del form

    setTask({
      name: '',
    })
  }

  return (
    <div className="form_task_container">
      <form className="form_task">
        <div className="input_container">
          <input
            type="text"
            className="input-text"
            placeholder="Add task"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div onClick={handleClick} className="add_button_container">
          <Add width={21} height={21} />
        </div>
        {taskerror ? <p className="mensaje error">This name isn't valid</p> : null}
      </form>
    </div>
  )
}

export default FormTask
