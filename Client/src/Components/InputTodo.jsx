import e from 'cors';
import React, {Fragment, useState} from 'react';

export default function InputTodo() {
  const [description, setDescription] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {description};
      const response = await fetch('http://localhost:3737/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      });

      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Todo List</h1>
      <form className="d-flex mt-5" onSubmit={submitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </Fragment>
  );
}
