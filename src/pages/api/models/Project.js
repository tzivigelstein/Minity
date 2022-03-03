import { Schema, model, models } from 'mongoose'

const ProjectSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  date: {
    type: Date,
    default: Date.now()
  },

  colors: {
    type: Object,
    default: {}
  },

  icon: {
    type: String
  }
})

export default models.Project || model('Project', ProjectSchema)
