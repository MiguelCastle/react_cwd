// import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from './components/screens/home';
// import logo from './assets/images/svg/Logo.svg';
import HomeMain from './screens/home/Home';
import "./App.css"

function App() {
  // useEffect(() => {
  //   console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  // });
  return (
      <Routes>
          {/* <Route path="/restaurant" element={<RestaurantHome/>}>
            <Route path="aboutus" element={<RAboutUs/>}/>
          </Route> */}
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/" element={<HomeMain/>}/>
      </Routes>
  );
}

export default App;
