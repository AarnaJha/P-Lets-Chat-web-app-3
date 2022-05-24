
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

user_name=document.getElementById("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

function addRoom(){

  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  })
  window.location="kwitter_page.html";
  localStorage.setItem("room_name" , room_name);
  
}

function getData()
{
  firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name-")+Room_names;
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'#"+Room_names+"></div></hr>"
document.getElementById("output").innerHTML+=row;
//End code
});});
}
getData();

function redirectToRoomName(name){
console.log(name);
  localStorage.setItem("room_name" , room_name);
  window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItemItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}

