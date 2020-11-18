importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
 
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfLYQieTSNFJVghLmwPidH9eMLJ8sgafA",
  apiKey: "AIzaSyBsV7dlgLgQK6dbsFrIcGmWoZ-p-7whn5M",
  authDomain: "iceboat-b3f16.firebaseapp.com",
  databaseURL: "https://iceboat-b3f16.firebaseio.com",
  projectId: "iceboat-b3f16",
  storageBucket: "iceboat-b3f16.appspot.com",
  messagingSenderId: "861495430662",
  appId: "1:861495430662:web:201a4dc97a59051b6dbd87",
  measurementId: "G-33626C5KBM"
};
firebase.initializeApp(config);
 
const messaging = firebase.messaging();
messaging.onMessage(function(payload){
 
    const title = "Hello World";
    const options = {
            body: payload.data.status
    };
 
    return self.registration.showNotification(title,options);
});
