// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Navbar/>
        <Routes>
            <Route  path="/home"   element={<Home />}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
