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

  /*const timestamp = Date();*/
  const timestamp = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
/*console.log(event.toLocaleDateString(undefined, options));*/

  const chatTitre = document.getElementById("chat-titre");
  const chatArticle = document.getElementById("chat-article");
  const chatTxt = document.getElementById("chat-txt");
  const chatName = document.getElementById("username");
  const article = chatArticle.value;
  const titre = chatTitre.value;
  const message = chatTxt.value;
  const username = chatName.value;

  chatTxt.value = "";
  db.ref("messages/" + timestamp).set({
    usr: username,
    date: `timestamp.toLocaleDateString(undefined, options)`,
    article: article,
    titre: titre,
    msg: message,
  });
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + `Pseudo : ${messages.titre} ${messages.usr} <br> Posté le : ${messages.date}` + `<br><br>  Message : <br>` + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
});
