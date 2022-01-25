const firebaseConfig = {
    apiKey: "AIzaSyCZexc7R76piOpMT90qXq2cvAklvVpLoIA",
    authDomain: "fir-donne4.firebaseapp.com",
    projectId: "fir-donne4",
    storageBucket: "fir-donne4.appspot.com",
    messagingSenderId: "854484714742",
    appId: "1:854484714742:web:9b59d66dac0fbdea3e58d7"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();

  /*const timestamp = Date();*/
  const timestamp = new Date();

  const chatTxt = document.getElementById("chat-txt");
  const chatName = document.getElementById("username");
  const message = chatTxt.value;
  const username = chatName.value;

  chatTxt.value = "";


  db.ref("messages/" + timestamp).set({
    usr: username,
    date: `${timestamp.toLocaleDateString()} à ${timestamp.toLocaleTimeString()}`,
    msg: message,
  });
}
const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li>" + `<u>Pseudo :</u> ${messages.usr} &nbsp;&nbsp; <u>Posté le :</u> ${messages.date}` + `<br><br>  <u>Message :</u> <br>` + messages.msg + "</li>";
  document.getElementById("messages").innerHTML += msg;
});
