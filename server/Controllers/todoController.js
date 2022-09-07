const pool = require('../db/db');

module.exports = {
  // Create new todo
  postTodo: async (req, res, next) => {
    const query = 'INSERT INTO todo (description) VALUES($1) RETURNING *';
    try {
      const {description} = req.body;
      const newTodo = await pool.query(query, [description]);
      res.json(newTodo.rows[0]);
      return next(newTodo);
    } catch (err) {
      console.error(err.message);
      return next(err);
    }
  },

  // Get every todo
  getTodos: async (req, res, next) => {
    const query = 'SELECT * FROM todo';
    try {
      const allTodos = await pool.query(query);
      res.locals.allTodos = allTodos.rows;
      return next();
    } catch (err) {
      console.error(err.message);
      return next(err);
    }
  },

  // Get a specific todo
  getOneTodo: async (req, res, next) => {
    const {id} = req.params;
    const query = 'SELECT * FROM todo WHERE todo_id = $1';

    try {
      console.log(req.params);
      const todo = await pool.query(query, [id]);
      res.locals.oneTodo = todo.rows[0].description;
      return next();
    } catch (err) {
      console.error(err.message);
      return next(err);
    }
  },

  // Update a todo
  updateTodo: async (req, res, next) => {
    const {id} = req.params;
    const {description} = req.body;
    const query = 'UPDATE todo SET description = $1 WHERE todo_id = $2';

    try {
      const updateTodo = await pool.query(query, [description, id]);
      res.locals.updateTodo = updateTodo.rows[0];
      return next();
    } catch (err) {
      console.error(err.message);
      return next(err);
    }
  },

  deleteTodo: async (req, res, next) => {
    const {id} = req.params;
    const query = 'DELETE FROM todo WHERE todo_id = $1';

    try {
      const deleteTodo = await pool.query(query, [id]);
      res.locals.deleteTodo = deleteTodo.rows[0];
      return next();
    } catch (err) {
      console.error(err.message);
      return next(err);
    }
  },
};
