import React, { useContext, useEffect } from 'react'
import TasksList from '../tasks/TasksList'
import FormTask from '../tasks/FormTask'
import Sidebar from '../layout/Sidebar'
import Bar from '../layout/Bar'
import AuthContext from '../../context/auth/authContext'
import projectContext from '../../context/projects/projectContext'
import Spinner from '../Spinner/Spinner'

const Projects = () => {
  //Extraccion del estado
  const authContext = useContext(AuthContext)
  const { authUser } = authContext

  const { project, loadingProjects } = useContext(projectContext)

  useEffect(() => {
    authUser()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Bar />
      <div className={project ? 'contenedor-app' : 'contenedor-app-proyectos'}>
        <Sidebar />
        <div className="seccion-principal">
          <>
            <FormTask />
            <div className="contenedor-tareas">{!loadingProjects && <TasksList />}</div>
          </>
        </div>
      </div>
    </>
  )
}

export default Projects
