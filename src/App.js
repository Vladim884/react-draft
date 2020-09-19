import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Block from './components/Block';
import Nav from './components/Nav';
import ShowWindowDimensions from './components/ShowWindowDimensions';
import Lorem from './components/Lorem';

function App() {
  return (
    <div>
      <Nav />
      <Navbar />
      <Block />
      <Lorem />
      <Block />
      <Lorem />
      {/* <ShowWindowDimensions /> */}
    </div>
  );
}

export default App;
