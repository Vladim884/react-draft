import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import ShowWindowDimensions from './components/ShowWindowDimensions';
import ServerData from './components/ServerDataContainer';
import SectionTop from './components/SectionTop';
// import {sagaMiddleware} from './redux/redux_store'
// import { watchLoadData } from './redux/sagas';

function App() {
  return (
    <div>
      <Nav />
      <Navbar />
      <SectionTop />
      <ServerData />
      {/* <ShowWindowDimensions /> */} 
    </div>
  );
}

export default App;
