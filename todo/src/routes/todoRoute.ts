import express from 'express'
import { createTodo, deleteTodo, getAllTodos, updateStatus } from '~/controllers/todoController.js'
const router = express.Router()

router.get('/todos', getAllTodos)
router.post('/todos', createTodo)
router.put('/todos/:id', updateStatus)
router.delete('/todos/:id', deleteTodo)

export default router
