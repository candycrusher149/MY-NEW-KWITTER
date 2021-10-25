var firebaseConfig = {
      apiKey: "AIzaSyBluz3Wr0tgUh0S3IRp9lWKtZhy7NylwH4",
      authDomain: "kwitter-443f1.firebaseapp.com",
      databaseURL: "https://kwitter-443f1-default-rtdb.firebaseio.com",
      projectId: "kwitter-443f1",
      storageBucket: "kwitter-443f1.appspot.com",
      messagingSenderId: "289400250096",
      appId: "1:289400250096:web:e5da1a4b843cd84e7eec35"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

     function addRoom()
     {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose : "adding room name"
           });
           localStorage.setItem("room_name", room_name);
           window.location = "kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name - "+Room_names);
row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}