const firebaseConfig = {
  apiKey: "AIzaSyAdTzjR16HhRZ8db_Hd0MAa6y_RlxK4Zfc",
  authDomain: "kwitter-319b4.firebaseapp.com",
  databaseURL: "https://kwitter-319b4-default-rtdb.firebaseio.com",
  projectId: "kwitter-319b4",
  storageBucket: "kwitter-319b4.appspot.com",
  messagingSenderId: "953258772698",
  appId: "1:953258772698:web:9ee308b461adf19551fde3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username=localStorage.getItem("username");

document.getElementById("username").innerHTML = "welcome " + username + "!";

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}

function addRoom() {
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
getData();
