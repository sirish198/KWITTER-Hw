function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}

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