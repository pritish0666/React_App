import React from 'react';
import {Component} from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import { Main } from './pages/main/main'
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { Createpost } from './pages/create-posts/createpost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main />}  />
          <Route path="/Login" element={<Login />}  />
          <Route path="/Createpost" element={<Createpost />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
