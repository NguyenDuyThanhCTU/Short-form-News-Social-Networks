// import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Register from './component/register/Register';
import Login from './component/login/Login'
import Navbar from './component/header/Header'
import './input.css'
import Header from './component/header/Header';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'



function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('http://localhost:8080/data');
  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);

  return ( 
    <Router>
      <Header/>
      <div className = "page-container">
        <Routes>
          <Route path= "/login" element = {<Login/>}/>
        </Routes>
      </div>
    </Router>
    
  );

  
}

export default App;
