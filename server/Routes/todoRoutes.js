const express = require('express');
const {
  postTodo,
  getTodos,
  getOneTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');
const router = express.Router();

/**
 * **********************************************
 *     routes for database CRUD operations      *
 * **********************************************
 */

router.get('/', getTodos, (req, res) => {
  return res.status(200).json(res.locals.allTodos);
});

router.get('/:id', getOneTodo, (req, res) => {
  return res.status(200).json(res.locals.oneTodo);
});

router.post('/', postTodo, (req, res) => {
  console.log('router posted');
  return res.status(200).json();
});

router.put('/:id', updateTodo, (req, res) => {
  return res.status(200).json();
});

router.delete('/:id', deleteTodo, (req, res) => {
  return res.status(200).json('Todo deleted!');
});

module.exports = router;
