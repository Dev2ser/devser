import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBFjYqbNvGVarL7OI8nBO7GuHqusEBb408",
  authDomain: "lemonco-bff8d.firebaseapp.com",
  databaseURL: "https://lemonco-bff8d.firebaseio.com",
  projectId: "lemonco-bff8d",
  storageBucket: "lemonco-bff8d.appspot.com",
  messagingSenderId: "820860844282",
  appId: "1:820860844282:web:2bbf9f77e2999ac59d3143",
  measurementId: "G-8PVSZ6GMDZ"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
