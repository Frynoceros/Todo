import React, {Fragment, useState, useEffect} from 'react';
import EditTodo from './EditTodo';
import Completed from './Completed';

const ListTodo = ({getTodos, deleteTodos, todos, setTodos}) => {
  useEffect(() => {
    getTodos();
  }, []);

  // Changes colors depending on the todos priority

  let priority = 'Unassigned';

  function prioritySetter(todo) {
    let priorityColor = 'default';
    if (todo.priority === 0) {
      priorityColor = 'default';
      priority = 'Unassigned';
    } else if (todo.priority === 3) {
      priorityColor = 'btn-error';
      priority = 'High';
    } else if (todo.priority === 2) {
      priorityColor = 'btn-warning';
      priority = 'Medium';
    } else if (todo.priority === 1) {
      priorityColor = 'btn-success';
      priority = 'Low';
    }
    return priorityColor;
  }

  return (
    <div className="overflow-y w-full h-full">
      <table className="table table-auto overflow-scroll w-full h-full text-center border-2 border-black">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Edit</th>
            <th>Remove</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {todos.map((todo) => {
            return (
              <tr key={todo.todo_id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>{todo.description}</td>
                <td>
                  <button
                    className={`btn ${prioritySetter(
                      todo
                    )} w-1/2 text-sm py-0.5`}
                  >
                    {priority}
                  </button>
                </td>
                <td>
                  <span>Date</span>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs"></button>
                  <EditTodo
                    getTodos={getTodos}
                    deleteTodos={deleteTodos}
                    todo={todo}
                    setTodos={setTodos}
                  />
                </th>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => deleteTodos(todo.todo_id)}
                  >
                    Remove
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
        {/* <!-- foot --> */}
        <tfoot>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Edit</th>
            <th>Remove</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ListTodo;
