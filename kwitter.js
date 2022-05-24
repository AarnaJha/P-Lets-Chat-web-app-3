const firebaseConfig = {
    apiKey: "AIzaSyBhPqG2tAvvukwLuLPJ3hVXw56ZMLn86Rk",
    authDomain: "p94letschat2.firebaseapp.com",
    databaseURL: "https://p94letschat2-default-rtdb.firebaseio.com",
    projectId: "p94letschat2",
    storageBucket: "p94letschat2.appspot.com",
    messagingSenderId: "229290559243",
    appId: "1:229290559243:web:124ac95bb612b6e68f040e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser(){
  localStorage.setItem("user_name" , user_name);
  
  window.location="kwitter_room.html";

  user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  purpose:"adding user"
});

  
  }

    
    