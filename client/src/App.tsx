// import React, { useEffect } from 'react';
import { Route, Routes, Navigate} from 'react-router-dom';
import HomeMain from './screens/home/Home';
import Contact from './screens/contact/Contact';
import CreateUser from './screens/teaching/users/CreateUser';
import LoginUser from './screens/teaching/users/LoginUser';
import "./App.css"


function App() {
  return (
      <Routes>
          {/* <Route path="/teaching/createstudent" element={<CreateUser/>}/>
          <Route path="/teaching/login" element={<LoginUser/>}/> */}
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<HomeMain />}/>
          <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
  );
}

export default App;
