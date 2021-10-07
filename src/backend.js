// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import React, { useState } from "react";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
var admin = require("firebase-admin");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var userMail = '';
var userName = '';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA85TXXTdE4wUGi5iokXB2fDjMTxeGBqsY",
  authDomain: "react-chat-app-39674.firebaseapp.com",
  projectId: "react-chat-app-39674",
  storageBucket: "react-chat-app-39674.appspot.com",
  messagingSenderId: "693960941733",
  appId: "1:693960941733:web:3b1701bb0bda05cab4ed4c",
  measurementId: "G-64XW4DZNDP",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
//console.log(provider.getScopes());

const present_user = getAuth().currentUser;

if (present_user){
    userMail = present_user.email;
    userName = present_user.displayName;
}
else{
    
    console.log("user not signed");
}
export function Logingoogle(){


const auth = getAuth();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(token);
    // The signed-in user info.
    const user = result.user;
    userMail = user.email;
    userName = user.displayName;
    console.log(user.displayName);
    console.log(user.email);
    console.log(user.getIdToken());

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    console.log(email);
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

//   return (
//     <div>
//       <button>
//         <button onClick={signInWithPopup}>LOGIN with google</button>
//       </button>
//     </div>
//   );


}

export function Usercreds(){
    
    let [name, setName] = useState("User Name: ");
    let [mail ,setMail] = useState("User Mail: ")

    const userdetail = () => {
        setName("User Name: "+userName);
        setMail("User Mail: "+userMail);
    }

    return ( 
        <div> 
            <button onClick={() => { Logingoogle(); setTimeout(()=> {userdetail()},6000);}}>Login with Google</button>
            <br/>
            <span>{mail}</span>
            <br/>
            <span>{name}</span>
        </div>
    );
}

