import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['in_progress', 'done'],
      default: 'in_progress'
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'high'
    },
    due_date: {
      type: Date,
      default: Date.now
    },
    cate_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
