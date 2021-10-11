
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
