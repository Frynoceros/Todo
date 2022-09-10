import React, {Fragment, useState} from 'react';
import InputTodo from './InputTodo';
import Table from './Table';

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
      <div className="flex flex-row ">
        <div className="basis-1/3">
          <InputTodo getTodos={getTodos} />
        </div>
        <div className="basis-2/3">
          <Table
            getTodos={getTodos}
            deleteTodos={deleteTodos}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
