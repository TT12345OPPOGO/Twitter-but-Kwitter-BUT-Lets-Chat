
var firebaseConfig = {
      apiKey: "AIzaSyBp3Sdw_QJEAUtbh2frxlK7xY_Iyy9KvCs",
      authDomain: "kwitter-8b5ee.firebaseapp.com",
      databaseURL: "https://kwitter-8b5ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b5ee",
      storageBucket: "kwitter-8b5ee.appspot.com",
      messagingSenderId: "343865115448",
      appId: "1:343865115448:web:3eb5eebe52c50361faf7cd"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
