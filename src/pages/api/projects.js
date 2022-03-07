import Project from './models/Project'
import colors from './helpers/colors'
import getRandomColor from './helpers/getRandomColor'
import useDatabase from './config/database'
import Task from './models/Task'

export default async function projects(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      const getProjectsHandler = useDatabase(getProjects)
      return getProjectsHandler(req, res)
    case 'POST':
      const createProjectHandler = useDatabase(createProject)
      return createProjectHandler(req, res)
  }
}

async function getProjects(req, res, session) {
  const {
    user: { id }
  } = session

  try {
    const projects = await Project.find({ owner: id })
    const parsedProjects = projects.map(({ _id, colors, date, name, icon, owner }) => ({
      id: _id,
      colors,
      date,
      name,
      icon,
      owner
    }))

    const tasksPromises = parsedProjects.map(
      ({ id, ...rest }) =>
        new Promise((resolve, reject) => {
          return Task.find({ project: id })
            .then(tasks => {
              resolve({ id, ...rest, tasks: tasks.length })
            })
            .catch(error => {
              reject(error)
            })
        })
    )

    const projectsWithTasksCount = await Promise.all(tasksPromises)

    return res.json(projectsWithTasksCount)
  } catch (error) {
    console.error(error)
    return res.status(500).send('There was an error')
  }
}

async function createProject(req, res, session) {
  const {
    user: { id }
  } = session

  try {
    const { name, colorId } = req.body

    const newProject = new Project({ name, owner: id })

    const color = colors.find(color => color.id === colorId)

    newProject.colors = color || getRandomColor()

    newProject.save()

    const parsedProject = {
      ...newProject.toObject(),
      id: newProject._id
    }

    res.json(parsedProject)
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}
