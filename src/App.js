import React from 'react';
import HomePage from "./pages/home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from './components/disover/Discover';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Discover/>
    </div>
  );
}

export default App;
