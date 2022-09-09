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
      <div className="flex flex-col items-center min-h-full min-w-full">
        <h2 className="text-base">Time to set some goals</h2>
        <form className="m-5" onSubmit={submitForm}>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What do you want to accomplish?"
            className="input input-bordered input-s input-success min-w-full"
          />

          <h2 className="text-base text-center m-5">Priority Level</h2>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col items-center">
              <label className="label cursor-pointer">
                <input
                  value={1}
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-green-500"
                  onChange={(e) => setPriority(e.target.value)}
                />
              </label>
              <span className="label-text text-base">Low</span>
            </div>
            <div className="flex flex-col items-center">
              <label className="label cursor-pointer">
                <input
                  value={2}
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-yellow-500"
                  onChange={(e) => setPriority(e.target.value)}
                />
              </label>
              <span className="label-text text-base">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <label className="label cursor-pointer">
                <input
                  value={3}
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-red-500"
                  onChange={(e) => setPriority(e.target.value)}
                />
              </label>
              <span className="label-text text-base">High</span>
            </div>
          </div>
          <button className="btn btn-success mt-5 min-w-full">Add</button>
        </form>
      </div>
    </Fragment>
  );
}
