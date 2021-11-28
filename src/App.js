import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import {Userlogin,Logingoogle} from "./backend.js";


function App() {

    // let [mail,setMail] = useState("User");
    // let [name, setName] = useState("User");

  return (
    <div className="App">
        <h1>HERE</h1>
        {/* <button onClick={Logingoogle}>Login with google</button> */}
        <Userlogin></Userlogin>

        
    </div>
  );
}

export default App;
