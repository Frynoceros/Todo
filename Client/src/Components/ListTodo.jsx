import React, {Fragment, useState, useEffect} from 'react';
import EditTodo from './EditTodo';
import Completed from './Completed';

const ListTodo = ({getTodos, deleteTodos, todos, setTodos}) => {
  useEffect(() => {
    getTodos();
  }, []);

  // Changes colors depending on the todos priority
  function prioritySetter(todo) {
    let priorityColor = 'default';
    if (todo.priority === 0) priorityColor = 'default';
    else if (todo.priority === 3) priorityColor = 'badge-danger';
    else if (todo.priority === 2) priorityColor = 'badge-warning';
    else if (todo.priority === 1) priorityColor = 'badge-success';
    return priorityColor;
  }

  return (
    <div className="container mt-5 text-center my-3 border">
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th scope="col">Completed</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Due Date</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <Completed todo={todo} />
                <td className="fw-normal mb-1">{todo.description}</td>
                <td>
                  <span
                    className={`badge ${prioritySetter(
                      todo
                    )} rounded-pill d-inline`}
                  >
                    Priority
                  </span>
                </td>
                <td>
                  <span>Date</span>
                </td>

                <td>
                  <EditTodo
                    getTodos={getTodos}
                    deleteTodos={deleteTodos}
                    todo={todo}
                    setTodos={setTodos}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-link btn-sm btn-rounded"
                    onClick={() => deleteTodos(todo.todo_id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;

{
  /* <table className="table">
<thead>
  <tr>
    <th>Description</th>
    <th>Edit</th>
    <th>Remove</th>
  </tr>
</thead>
<tbody>
  {todos.map((todo) => {
    return (
      <tr key={todo.todo_id} className={prioritySetter(todo)}>
        <td>{todo.description}</td>
        <td>
          <EditTodo
            getTodos={getTodos}
            deleteTodos={deleteTodos}
            todo={todo}
            setTodos={setTodos}
          />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodos(todo.todo_id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
</table> */
}
