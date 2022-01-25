const firebaseConfig = {
  apiKey: "AIzaSyC18tNBDGbpqZXN9soUUPsdjZ2lkv5nzUc",
  authDomain: "hyderium-69.firebaseapp.com",
  databaseURL: "https://hyderium-69-default-rtdb.firebaseio.com",
  projectId: "hyderium-69",
  storageBucket: "hyderium-69.appspot.com",
  messagingSenderId: "668101176548",
  appId: "1:668101176548:web:7b7a9cd921b176d4cf10f1",
  measurementId: "G-NWKR09TWV7"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();
  
  
  /*const username = prompt("What's your name?");*/
  
  
  document.getElementById("send-message").addEventListener("submit", postChat);
  function postChat(e) {
  e.preventDefault();
  
  const timestamp = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    
 /*   const birthday = new Date();
const date1 = birthday.getDate();
    
    const moonLanding = new Date();

console.log(moonLanding.getFullYear());
    console.log(event.toDateString());

  const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

console.log(event.toLocaleDateString(undefined, options));*/

    
    
  const chatTxt = document.getElementById("chat-txt");
  /*const chatTitre = document.getElementById("chat-titre");*/
  const chatName = document.getElementById("username");
  const message = chatTxt.value;
  /*const titre = chatTitre.value;*/
  const username = chatName.value;
  chatTxt.value = "";

  db.ref("messages/" + timestamp).set({
    usr: username,
    date: `${timestamp.toLocaleDateString(undefined, options))}`,
    /*titre: titre,*/
    msg: message,
  });
  }
  const fetchChat = db.ref("messages/");
  fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  
  
  const msg = `<div class="x-messages"><span class="user">${messages.usr}</span><span class="date">${messages.date}</span><br><span class="txt">${messages.msg}</span></div>`;
  /*const msg = `<div class="x-messages"><span class="user">${messages.usr}</span><span class="date">${messages.date}</span><br><span class="txt">${messages.msg}</span>  <div class="comments"><div class="comment"><div class="comment-info">` + `<div class="comment-pseudo">${messages.usr}</div><div class="comment-date">${messages.date}</div>` + `</div><div class="comment-comment">${messages.msg}</div></div></div></div>`;*/
  
  document.getElementById("messages").innerHTML += msg;
  });
  
  
  
