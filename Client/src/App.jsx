import {Fragment} from 'react';
import './assets/Styles/App.css';
import InputTodo from './Components/InputTodo';
import ListTodo from './Components/ListTodo';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
