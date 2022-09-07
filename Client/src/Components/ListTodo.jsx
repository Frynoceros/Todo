import React, {Fragment, useState, useEffect} from 'react';

const ListTodo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3737/todos');
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);
  return (
    <Fragment>
      {/* {' '} */}
      <div className="container mt-5 text-center">
        <table className="table">
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
                <tr key={`Row ${todo.todo_id}`}>
                  <td>{todo.description}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListTodo;
