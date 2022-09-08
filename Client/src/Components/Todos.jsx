import React, {Fragment, useState} from 'react';
import InputTodo from './InputTodo';
import ListTodo from './ListTodo';

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // Get all todos
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3737/todos');
      const jsonData = await response.json();

      setTodos(jsonData.sort((a, b) => b.priority - a.priority));
    } catch (err) {
      console.error(err.message);
    }
  };

  // Delete specific todo
  const deleteTodos = async (id) => {
    try {
      const response = await fetch(`http://localhost:3737/todos/${id}`, {
        method: 'DELETE',
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <div className="container p-5 my-5 border max-height: 100%; max-width: 100%;">
        <InputTodo getTodos={getTodos} />
        <ListTodo
          getTodos={getTodos}
          deleteTodos={deleteTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </Fragment>
  );
};

export default Todo;
