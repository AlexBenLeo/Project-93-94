// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyA_eK9kx5RgFGVIS-IoxIVe5203QoxVe-w",
    authDomain: "project-94-393f5.firebaseapp.com",
    projectId: "project-94-393f5",
    storageBucket: "project-94-393f5.appspot.com",
    messagingSenderId: "936512719832",
    appId: "1:936512719832:web:59001d89c17a23553480ad"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  console.log(user_name);
  document.getElementById("user_name").innerHTML="Welcome"+user_name;
  function addRoom() {
      room_name=document.getElementById("twitter").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding Room Name"
      });
  }