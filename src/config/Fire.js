import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBx_XMAGdWgneHNtqjNmE2ePmi39x-04ok",
  authDomain: "h0school-apps.firebaseapp.com",
  databaseURL: "https://h0school-apps.firebaseio.com",
  projectId: "h0school-apps",
  storageBucket: "h0school-apps.appspot.com",
  messagingSenderId: "53926280771",
  appId: "1:53926280771:web:7960220cd0233697c41ef6"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
