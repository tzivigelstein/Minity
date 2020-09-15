import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext'
import tasksContext from '../../context/tasks/tasksContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TasksList = () => {

    const taskContext = useContext(tasksContext)

    const { tasksproject } = taskContext

    //Obtener state del context

    const projectsContext = useContext(projectContext)

    //Se extrae el valor project desde el context

    const { project, deleteProject } = projectsContext

    //Se extrae el valor desde el array project

    if (!project) return <h2>Select a project</h2>

    const [actualProject] = project

    const onClick = () => {
        deleteProject(actualProject._id)
    }

    return (
        <Fragment>
            <h2>Project {actualProject.name}</h2>
            <ul className='listado-tareas'>
                {tasksproject.length === 0
                    ?
                    <li>There are no tasks. Try adding a new one</li>
                    :
                    < TransitionGroup >
                        {tasksproject.map((task) => (
                            <CSSTransition
                                key={task._id}
                                timeout={200}
                                classNames='tarea'
                            >
                                <Task
                                    task={task}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
                onClick={onClick}
            >
                Delete {actualProject.name} &times;
            </button>
        </Fragment >
    );
}

export default TasksList;