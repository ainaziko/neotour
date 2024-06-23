import React from 'react';
import HomePage from "./pages/home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tours from './pages/tours/Tours';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Tours/>
    </div>
  );
}

export default App;
