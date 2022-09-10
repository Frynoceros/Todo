import {Fragment} from 'react';
import './assets/Styles/App.css';
import MainContainer from './Components/MainContainer';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <MainContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
