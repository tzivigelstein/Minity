import React, { useContext, useEffect } from 'react'
import Project from '../projects/Project'
import projectContext from '../../context/projects/projectContext'
import AlertContext from '../../context/alerts/alertContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const List = () => {
  const alertContext = useContext(AlertContext)
  const { alert, showAlert } = alertContext

  //Importar context

  const projectsContext = useContext(projectContext)

  //Extraer valores del context

  const { PROJECTS, getProjects, msg } = projectsContext

  //useEffect para cargar los Proyectos en cuanto se cargue el componente

  useEffect(() => {
    //Si hay un error
    if (msg) {
      showAlert(msg.msg, msg.category)
    }
    getProjects()
    //eslint-disable-next-line
  }, [msg])

  //Validacion del array PROJECTS

  if (PROJECTS.length === 0)
    return (
      <>
        <p>It seems you don't have projects. Try creating a new one.</p>
        <div className="not-found-container">
          <img src="/not-found.gif" alt="" />
        </div>
      </>
    )

  return (
    <ul className="listado-proyectos">
      {alert ? <div className={`alerta ${alert.category}`}>{alert.msg}</div> : null}

      <TransitionGroup>
        {PROJECTS.map(project => (
          <CSSTransition timeout={200} classNames="proyecto" key={project._id}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  )
}

export default List
