import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/performance';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCK5MmJrfVw-ZxmnuBDle2qXHmCYFG5J1Q',
  authDomain: 'console-devser.firebaseapp.com',
  databaseURL: 'https://console-devser.firebaseio.com',
  projectId: 'console-devser',
  storageBucket: 'console-devser.appspot.com',
  messagingSenderId: '644144043418',
  appId: '1:644144043418:web:405efe9f94f6111ff31623',
  measurementId: 'G-MP57LVRW7B',
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

export const auth = fire.auth();
export const db = fire.firestore();
export const analytics = fire.analytics();
export const perf = fire.performance();
export default fire;
