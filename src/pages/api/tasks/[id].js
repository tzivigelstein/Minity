import useDatabase from '../config/database'
import Project from '../models/Project'
import Task from '../models/Task'

export default async function tasks(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      const getTasksHandler = useDatabase(getTasks)
      return getTasksHandler(req, res)
    case 'POST':
      const newTaskHandler = useDatabase(newTask)
      return newTaskHandler(req, res)
    case 'DELETE':
      const deleteTaskHandler = useDatabase(deleteTask)
      return deleteTaskHandler(req, res)
    case 'PUT':
      const updateTasksHandler = useDatabase(updateTasks)
      return updateTasksHandler(req, res)
  }
}

async function newTask(req, res, session) {
  const {
    user: { id }
  } = session

  try {
    const { id: project } = req.query

    const existentProject = await Project.findById(project)

    if (!existentProject) {
      res.status(404).send('Project not found')
    }

    if (existentProject.owner.toString() !== id) {
      return res.status(401).json({ msg: 'Not permitted' })
    }

    const body = { ...req.body, project }
    const task = new Task(body)
    await task.save()

    res.json({ ...task.toObject(), id: task._id })
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}

async function getTasks(req, res, session) {
  const {
    user: { id }
  } = session

  try {
    const { id: project } = req.query

    const existentProject = await Project.findById(project)

    if (!existentProject) {
      res.status(404).send('Project not found')
    }

    //Revisar si el proyecto pertenece al user
    if (existentProject.owner.toString() !== id) {
      return res.status(401).json({ msg: 'Not permitted' })
    }

    //Obtener tareas
    const tasks = await Task.find({ project }).sort({ date: -1 })

    const parsedTasks = tasks.map(({ _id, state, date, name, project }) => ({
      id: _id,
      state,
      date,
      name,
      project
    }))

    res.json({ tasks: parsedTasks })
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}

//Actualizar tareas
async function updateTasks(req, res, session) {
  const {
    user: { id }
  } = session
  try {
    const { project, name, state } = req.body
    const { id: taskId } = req.query

    let task = await Task.findOne({ _id: taskId })

    if (!task) {
      return res.status(404).json({ msg: 'Task not found' })
    }

    //Extraer proyecto
    const existentProject = await Project.findOne({ _id: project })

    //Verificar si el proyecto le pertenece
    if (existentProject.owner.toString() !== id) {
      return res.status(401).json({ msg: 'Not permited' })
    }

    //Crear un nuevo objeto
    const newTask = {}

    newTask.name = name
    newTask.state = state

    //Guardar tarea
    task = await Task.findOneAndUpdate({ _id: taskId }, newTask, { new: true })

    const taskArray = [task]
    const parsedTask = taskArray.map(({ _id, state, date, name, project }) => ({
      id: _id,
      state,
      date,
      name,
      project
    }))[0]

    res.json(parsedTask)
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}

//Eliminar tareas
async function deleteTask(req, res, session) {
  const {
    user: { id }
  } = session

  try {
    //Extraer el proyecto y comprobar su existencia
    const { id: taskId } = req.query
    const {
      body: { project }
    } = req

    //Verificar la existencia de la tarea
    const task = await Task.findById(taskId)

    if (!task) {
      return res.status(404).json({ msg: 'Task not found' })
    }

    //Extraer proyecto
    const existentProject = await Project.findById(project)

    //Verificar si el proyecto le pertenece
    if (existentProject.owner.toString() !== id) {
      return res.status(401).json({ msg: 'Not permited' })
    }

    //Eliminar
    await Task.findOneAndRemove({ _id: taskId })
    res.json({ msg: 'Deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}
