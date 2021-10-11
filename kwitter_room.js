
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBRn2_1cHiJ3CYxBDdYoeJ8yBYmS60HHbQ",
      authDomain: "kwitter-remaked.firebaseapp.com",
      databaseURL: "https://kwitter-remaked-default-rtdb.firebaseio.com",
      projectId: "kwitter-remaked",
      storageBucket: "kwitter-remaked.appspot.com",
      messagingSenderId: "233770072385",
      appId: "1:233770072385:web:e67757482bec966cf6c9c0"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
