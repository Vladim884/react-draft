import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import ShowWindowDimensions from './components/ShowWindowDimensions';
import Lorem from './components/Lorem';
import SectionTop from './components/SectionTop';

function App() {
  return (
    <div>
      <Nav />
      <Navbar />
      <SectionTop />
      <Lorem />
      {/* <ShowWindowDimensions /> */} 
      <Lorem />
    </div>
  );
}

export default App;
