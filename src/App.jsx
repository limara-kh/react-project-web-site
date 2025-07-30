import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services.jsx';
import Volunteer from './components/pages/Volunteer.jsx';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
