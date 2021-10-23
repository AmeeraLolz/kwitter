//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDvLMr1Ksr576gfTW-BScIidbgmYmvV77M",
      authDomain: "kwitter-80689.firebaseapp.com",
      databaseURL: "https://kwitter-80689-default-rtdb.firebaseio.com",
      projectId: "kwitter-80689",
      storageBucket: "kwitter-80689.appspot.com",
      messagingSenderId: "269928732108",
      appId: "1:269928732108:web:a002c8386cfc4982d63969"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}
//End code
      } });  }); }
getData();
