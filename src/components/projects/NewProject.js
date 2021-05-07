import React, { useState, useContext } from 'react'
import projectContext from '../../context/projects/projectContext'

const NewProject = () => {
  //Obtener state del context

  const projectsContext = useContext(projectContext)

  //Extraccion de los valores del context

  const { form, errorform, showForm, addProject, showError } = projectsContext

  //State del form del proyecto

  const [project, setProject] = useState({
    name: '',
  })

  //Extraccion de los valores del state

  const { name } = project

  //Se añaden los valores del form al state

  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    })
  }

  //Funcion del submit al nuevo proyecto

  const onSubmit = e => {
    e.preventDefault()

    //Validacion del form proyecto

    if (name === '') {
      showError()
      return
    }

    //Añadir al state

    addProject(project)

    //Reiniciar el form

    setProject({
      name: '',
    })
  }

  //Onclick añadir el form para un nuevo proyecto

  const onClick = () => {
    showForm()
  }

  return (
    <>
      <button className="btn btn-block btn-primario" type="button" onClick={onClick}>
        New Project
      </button>

      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Project name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input type="submit" className="btn btn-block btn-primario" value="Add" />
        </form>
      ) : null}
      {errorform ? <p className="mensaje error">El nombre es obligatorio</p> : null}
    </>
  )
}

export default NewProject
