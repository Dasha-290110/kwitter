var firebaseConfig = {
  apiKey: "AIzaSyAKnuPb2oQEnMh2ovxZB9BWt1AR23Dobyg",
  authDomain: "kwitter-2456b.firebaseapp.com",
  databaseURL: "https://kwitter-2456b-default-rtdb.firebaseio.com",
  projectId: "kwitter-2456b",
  storageBucket: "kwitter-2456b.appspot.com",
  messagingSenderId: "927256915595",
  appId: "1:927256915595:web:09914cc1423ffef3116e8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addroom(){
      room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "add room name"
       });
       localStorage.setItem("room_name",room_name);
       window.location="kwitter_page.html";

    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("room name-"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#" + Room_names+"</div><hr>";
document.getElementById("output").innerHTML+Room;

});});}
getData();

function redirecttoroomname(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}