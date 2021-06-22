var firebaseConfig = {
  apiKey: "AIzaSyDnvbL7d-80GvSrR8mgdg6_8-i_6NKgD0o",
  authDomain: "kwitter2-4eb1b.firebaseapp.com",
  databaseURL: "https://kwitter2-4eb1b-default-rtdb.firebaseio.com",
  projectId: "kwitter2-4eb1b",
  storageBucket: "kwitter2-4eb1b.appspot.com",
  messagingSenderId: "746480936423",
  appId: "1:746480936423:web:6996a246fb09b1789e0942"
};

firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!";
    
    function addRoom() { 
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update
      ({ purpose : "adding room name" }); 
      localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html"; }

function getData() 
{
firebase.database().ref("/").on('value', 
function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
      {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
      getData();

      function redirectToRoomName(name) {
             console.log(name);
             localStorage.setItem("room_name", name); 
             window.location = "kwitter_page.html"; }
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}