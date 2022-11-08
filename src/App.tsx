import React from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route path="/" element={<Hero />}/>
      </Routes>
    </div>
  );
}

export default App;
