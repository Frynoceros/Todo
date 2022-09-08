import {Fragment} from 'react';
import './assets/Styles/App.css';
import Navbar from './Components/Navbar';
import Todo from './Components/Todos';

function App() {
  return (
    <Fragment>
      <Navbar />

      <div className="container min-vh-100 min-vw-100">
        <Todo />
      </div>
    </Fragment>
  );
}

export default App;
