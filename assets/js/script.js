const firebaseConfig = {
  apiKey: "AIzaSyCkTRS3DOculF4YF5i4vlMHRB8SwfPG-Qc",
  authDomain: "hyderiu.firebaseapp.com",
  databaseURL: "https://hyderiu-default-rtdb.firebaseio.com",
  projectId: "hyderiu",
  storageBucket: "hyderiu.appspot.com",
  messagingSenderId: "97533330289",
  appId: "1:97533330289:web:a1735c6aac38d0c8dbecd0",
  measurementId: "G-SGZVTMWHCS"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  
  /*const username = prompt("What's your name?");*/
  
  
  document.getElementById("send-message").addEventListener("submit", postChat);
  function postChat(e) {
  e.preventDefault();
  
  /*const timestamp = Date();*/
  const timestamp = new Date();
  
  const chatTxt = document.getElementById("chat-txt");
  /*const chatTitre = document.getElementById("chat-titre");*/
  const chatName = document.getElementById("username");
  const message = chatTxt.value;
  /*const titre = chatTitre.value;*/
  const username = chatName.value;
  chatTxt.value = "";
  
  
  db.ref("messages/" + timestamp).set({
    usr: username,
    date: `${timestamp.toLocaleDateString()} à ${timestamp.toLocaleTimeString()}`,
    /*titre: titre,*/
    msg: message,
  });
  }
  const fetchChat = db.ref("messages/");
  fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  
  
  const msg = `<div class="overlay-scrollbar"><div class="comments"><div class="comment"><div class="comment-info">` + `<div class="comment-pseudo">${messages.usr}</div><div class="comment-date">${messages.date}</div>` + `</div><div class="comment-comment">${messages.msg}</div></div></div></div>`;
  
  /*const msg = "<li>" + `<u>Pseudo :</u> ${messages.usr} &nbsp;&nbsp; <u>Posté le :</u> ${messages.date}` + `<br><br>  <u>Titre :</u> <br>` + messages.titre +  `<br><br>  <u>Message :</u> <br>` + messages.msg + "</li>";*/
  document.getElementById("messages").innerHTML += msg;
  });
  
  

  /*const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    
    const datix = timestamp.options;*/
  
  
