import React, { useContext, useEffect } from 'react'
import TasksList from '../tasks/TasksList'
import FormTask from '../tasks/FormTask'
import Sidebar from '../layout/Sidebar'
import Bar from '../layout/Bar'
import AuthContext from '../../context/auth/authContext'
import projectContext from '../../context/projects/projectContext'

const Projects = () => {
  //Extraccion del estado
  const authContext = useContext(AuthContext)
  const { authUser } = authContext

  const { project } = useContext(projectContext)

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
          <main>
            <FormTask />
            <div className="contenedor-tareas">
              <TasksList />
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Projects
