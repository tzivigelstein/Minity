import { getSession } from 'next-auth/react'
import Project from '../models/Project'
import dbConnector from '../config/database'

export default async function projects(req, res) {
  const session = await getSession({ req })
  const { method } = req

  switch (method) {
    case 'DELETE':
      return dbConnector(deleteProject(req, res, session))
    case 'PUT':
      return dbConnector(updateProject(req, res, session))
  }
}

async function deleteProject(req, res, session) {
  const {
    user: { id }
  } = session

  const { id: projectId } = req.query

  try {
    const project = await Project.findById(projectId)

    if (project.owner.toString() !== id) {
      return res.status(401).json({ msg: 'Not permitted' })
    }

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' })
    }

    await Project.findOneAndRemove({ _id: projectId })
    res.json({ msg: 'Deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}

async function updateProject(req, res, session) {
  const {
    user: { id }
  } = session

  const { name } = req.body
  const newProject = {}
  if (name) {
    newProject.name = name
  }

  try {
    let project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ msg: 'Project not found' })
    }

    if (project.owner.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not permitted' })
    }

    project = await Project.findByIdAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true })
    res.json({ project })
  } catch (error) {
    console.error(error)
    res.status(500).send('There was an error')
  }
}
