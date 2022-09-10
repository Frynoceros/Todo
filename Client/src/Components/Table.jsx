import React, {Fragment, useState, useEffect} from 'react';
import EditTodo from './EditTodo';
import Completed from './Completed';
import PriorityBtn from './PriorityBtn';

const ListTodo = ({getTodos, deleteTodos, todos, setTodos}) => {
  console.log(todos);

  useEffect(() => {
    getTodos();
  }, []);

  // Changes colors depending on the todos priority
  let priority = 'Unassigned';

  function prioritySetter(todo) {
    let priorityColor = 'bg-blue-500';
    if (todo.priority === 0) {
      priorityColor = 'bg-blue-500';
      priority = 'Unassigned';
    } else if (todo.priority === 3) {
      priorityColor = 'bg-red-600';
      priority = 'High';
    } else if (todo.priority === 2) {
      priorityColor = 'bg-yellow-400';
      priority = 'Medium';
    } else if (todo.priority === 1) {
      priorityColor = 'bg-green-600';
      priority = 'Low';
    }
    return priorityColor;
  }

  return (
    <div className="object-cover w-full overflow-y h-auto max-h-96 dark:bg-gray-900 ">
      <table className="object-cover w-full max-h-96 dark:bg-gray-900 border border-white">
        <thead>
          <tr>
            <th>{'  '}</th>
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
              <tr className="hover border-b-2 text-center" key={todo.todo_id}>
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-secondary"
                    />
                  </label>
                </th>
                <td>{todo.description}</td>
                <td>
                  <button
                    className={`btn ${prioritySetter(
                      todo
                    )} btn-xs w-1/2 font-bold`}
                  >
                    {priority}
                  </button>
                  {/* <PriorityBtn todo={todo} prioritySetter={prioritySetter} /> */}
                </td>
                <td>
                  <span>Date</span>
                </td>
                <th>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
