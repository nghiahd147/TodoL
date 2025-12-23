import { RequestHandler } from 'express'
import Todo from '~/models/todos.js'

export const getAllTodos: RequestHandler = async (req, res) => {
  try {
    const todo = await Todo.find()
    res.status(200).json({
      data: todo
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const createTodo: RequestHandler = async (req, res) => {
  try {
    const { title, status, priority, due_date, cate_id } = req.body

    if (!title || !cate_id) {
      return res.status(400).json({ message: 'Title and Category are required' })
    }

    const newTodo = new Todo({
      title,
      status,
      priority,
      due_date,
      cate_id
    })

    await newTodo.save()

    res.status(201).json({
      data: newTodo,
      message: 'Created todo successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findById(id)

    if (!todo) {
      return res.status(404).json({ message: 'Todo is not defied' })
    }

    const { title, status, priority, due_date, cate_id } = req.body

    const todoUpdate = await Todo.findByIdAndUpdate(id, { title, status, priority, due_date, cate_id }, { new: true })

    res.status(200).json({
      data: todoUpdate,
      message: 'Updated todo successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const updateStatusTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findById(id)

    if (!todo) {
      return res.status(404).json({ message: 'Todo is not defied' })
    }

    const { status } = req.body

    await todo.updateOne({ status: status })

    res.status(200).json({
      message: 'Updated todo successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}

export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const todo = await Todo.findById(id)

    if (!todo) {
      return res.status(404).json({ message: 'Todo is not defied' })
    }

    await todo.deleteOne()

    res.status(204)
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Internal server error' })
  }
}
