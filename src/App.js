import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import {Usercreds,Logingoogle} from "./backend.js";


function App() {

    // let [mail,setMail] = useState("User");
    // let [name, setName] = useState("User");

  return (
    <div className="App">
        <h1>HERE</h1>
        {/* <button onClick={Logingoogle}>Login with google</button> */}
        <Usercreds></Usercreds>

        
    </div>
  );
}

export default App;
