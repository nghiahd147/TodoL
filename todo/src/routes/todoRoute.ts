import express from 'express'
import { createTodo, deleteTodo, getAllTodos, updateTodo, updateStatusTodo } from '~/controllers/todoController.js'
const router = express.Router()

router.get('/todos', getAllTodos)
router.post('/todo', createTodo)
router.put('/todo/:id', updateTodo)
router.put('/todo/update-status/:id', updateStatusTodo)
router.delete('/todo/:id', deleteTodo)

export default router
