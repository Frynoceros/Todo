const pool = require('../db/db');

// CREATE TABLE todo(
//   todo_id SERIAL PRIMARY KEY,
//   description VARCHAR(255) NOT NULL,
//   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//   updated_at TIMESTAMP NULL,
//   priority INTEGER Default 4,
//   completed_at TIMESTAMP NULL,
//   completed BOOLEAN NOT NULL
// );

module.exports = {
  // Create new todo
  postTodo: async (req, res, next) => {
    const query =
      'INSERT INTO todo (description, priority) VALUES($1, $2) RETURNING *';
    try {
      const {description, priority} = req.body;
      const params = [description, priority];
      console.log(req.body);
      const newTodo = await pool.query(query, params);
      res.json(newTodo.rows[0]);
      console.log('controller');
      return next();
    } catch (err) {
      console.error(err.message, 'postTodo');
      return next();
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
      console.error(err.message, 'allTodos');
      return next();
    }
  },

  // Get a specific todo
  getOneTodo: async (req, res, next) => {
    const {id} = req.params;
    const query = 'SELECT * FROM todo WHERE todo_id = $1';

    try {
      const todo = await pool.query(query, [id]);
      res.locals.oneTodo = todo.rows[0].description;
      return next();
    } catch (err) {
      console.error(err.message, 'getOneTodo');
      return next();
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
      console.error(err.message, 'updateTodo');
      return next();
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
      console.error(err.message, 'deleteTodo');
      return next();
    }
  },
};
