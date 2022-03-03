import { Schema, model, models } from 'mongoose'

const TaskSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
})

export default models.Task || model('Task', TaskSchema)
