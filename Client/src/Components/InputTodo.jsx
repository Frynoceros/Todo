import React, {Fragment, useState} from 'react';

export default function InputTodo({getTodos}) {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(0);
  const [sorting, setSorting] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {description, priority};
      if (description === '') {
        return setDescription('Gotta type something');
      } else {
        const response = await fetch('http://localhost:3737/todos', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        });
        console.log(body);
        setDescription('');
        getTodos();
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <div className="input-group mt-3 mb-3">
        <form className="d-flex mt-5 vw-100" onSubmit={submitForm}>
          <select
            className="text-center"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            Priority
            <option defaultValue={0}>Priority</option>
            <option value={3}>High</option>
            <option value={2}>Medium</option>
            <option value={1}>Low</option>
          </select>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What do you want to accomplish?"
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
}
