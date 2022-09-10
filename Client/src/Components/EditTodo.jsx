import React, {Fragment, useState} from 'react';

const EditTodo = ({getTodos, todo}) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    // e.preventDefault();
    try {
      const body = {description};
      const response = await fetch(
        `http://localhost:3737/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body),
        }
      );
      getTodos();
    } catch (err) {
      console.error(err.message, 'updateDescription');
    }
  };
  return (
    <Fragment>
      {/* <button
        type="button"
        className="btn btn-link btn-sm btn-rounded"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      ></button> */}

      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
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
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>
      </button>

      {/* <div className="modal" id={`id${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title text-center">Edit Todo</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>

            <div className="modal-body">
              <form
                className="d-flex mt-5"
                onSubmit={(e) => updateDescription(e)}
              >
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-link btn-sm btn-rounded"
                data-bs-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-link btn-sm btn-rounded"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default EditTodo;
