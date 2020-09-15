import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext'
import tasksContext from '../../context/tasks/tasksContext'

const Project = ({ project }) => {

    //Obtener state del context

    const projectsContext = useContext(projectContext)
    const taskContext = useContext(tasksContext)

    const { actualProject } = projectsContext
    const { getTasks } = taskContext

    const onClick = id => {
        actualProject(id)
        getTasks(id)
    }

    return (
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick={() => onClick(project._id)}
            >{project.name}</button>
        </li>
    );
}

export default Project;