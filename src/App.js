import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComp from './components/navbar';
import CarouselSlide from './components/slider';

function App() {
  return (
    <div className="App">
      <NavBarComp/>
      <CarouselSlide/>
    </div>
  );
}

export default App;
