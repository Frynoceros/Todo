import {Fragment} from 'react';
import './assets/Styles/App.css';
import Navbar from './Components/Navbar';
import Todos from './Components/Todos';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <h1 className="text-xl text-center mt-5">Todo List</h1>
      <div className="max-h-screen m-5">
        <Todos className="flex flex-row" />

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
