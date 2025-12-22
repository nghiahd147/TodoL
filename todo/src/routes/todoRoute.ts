import express from 'express'
import { createTodo, deleteTodo, getAllTodos, updateTodo, updateStatusTodo } from '~/controllers/todoController.js'
const router = express.Router()

router.get('/todos', getAllTodos)
router.post('/todos', createTodo)
router.put('/todos', updateTodo)
router.put('/todos/:id', updateStatusTodo)
router.delete('/todos/:id', deleteTodo)

export default router
