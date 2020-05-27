import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCK5MmJrfVw-ZxmnuBDle2qXHmCYFG5J1Q",
  authDomain: "console-devser.firebaseapp.com",
  databaseURL: "https://console-devser.firebaseio.com",
  projectId: "console-devser",
  storageBucket: "console-devser.appspot.com",
  messagingSenderId: "644144043418",
  appId: "1:644144043418:web:405efe9f94f6111ff31623",
  measurementId: "G-MP57LVRW7B",
};
// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
