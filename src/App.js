import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.js"
import Dashboard from "./components/Dashboard.js"
function App() {

    // let [mail,setMail] = useState("User");
    // let [name, setName] = useState("User");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
