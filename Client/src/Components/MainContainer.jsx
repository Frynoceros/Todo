import React, {useState} from 'react';
import Hero from './Hero';
import BottomLeftDiv from './BottomLeftDiv';
import BottomCenterDiv from './BottomCenterDiv';
import BottomRightDiv from './BottomRightDiv';
import Table from './Table';
import InputTodo from './InputTodo';

const MainContainer = () => {
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
    <div className="dark:bg-gray-800 dark:text-gray-100">
      <Hero className="" />
      <div className="p-6 space-y-8">
        <main className="main-container">
          <div className="container mx-auto space-y-16 min-w-full">
            <section>
              <div className="grid gap-6 lg:grid-cols-3 ">
                <div className=" rounded lg:flex lg:col-span-3 ">
                  {/* <img
                    src="https://source.unsplash.com/random/485x365"
                    alt=""
                    className="object-cover w-full h-auto max-h-96 dark:bg-gray-500"
                  /> */}

                  <Table
                    getTodos={getTodos}
                    deleteTodos={deleteTodos}
                    todos={todos}
                    setTodos={setTodos}
                    className=""
                  />

                  <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col dark:bg-gray-900">
                    <span className="self-start px-3 py-1 text-sm rounded-full dark:bg-cyan-400 dark:text-gray-900">
                      Business
                    </span>
                    <h2 className="text-3xl font-bold md:flex-1">
                      Enter your goals here fjklsdjflkajfklajsklfajkldfjalk;j k
                    </h2>
                    <div>
                      <p className="dark:text-gray-400">November 30, 2020</p>
                      <p className="dark:text-gray-400">By Leroy Jenkins</p>
                      <InputTodo />
                    </div>
                  </div>
                </div>
                <BottomLeftDiv />
                <BottomCenterDiv />
                <BottomRightDiv />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainContainer;
