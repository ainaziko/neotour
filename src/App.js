import React from 'react';
import {Routes, Route, Link} from "react-router-dom"
import HomePage from "./pages/home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tours from './pages/tours/Tours';
import TourDetails from './components/tourDetails/TourDetails';

function App() {

  return (
    <div className="App">

      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/tours" element={<Tours/>} />
        <Route path="/tours/:id" element={<TourDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
