// import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeMain from './screens/home/Home';
import "./App.css"

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomeMain/>}/>
      </Routes>
  );
}

export default App;
