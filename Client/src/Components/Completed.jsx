import React from 'react';

const Completed = ({todo}) => {
  console.log(todo.todo_id);
  console.log(todo.completed);
  console.log(todo.completed_at);
  // const [completedTodo, setCompletedTodo] = useState('');

  const updateCompleted = async (e) => {
    e.preventDefault();
    try {
      const body = {};
      const response = await fetch(
        `http://localhost:3737/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        }
      );
    } catch (err) {
      console.error(err.message, 'updateCompleted');
    }
  };

  return (
    <td scope="row">
      <input
        className="form-check-input"
        type="checkbox"
        value={''}
        id="flexCheckDefault"
      />
    </td>
  );
};

export default Completed;
