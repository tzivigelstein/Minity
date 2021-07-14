import { useContext } from 'react'
import projectContext from '../context/projects/projectContext'

const useProjects = () => useContext(projectContext)

export default useProjects
