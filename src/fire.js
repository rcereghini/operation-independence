import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAVsZOZEhoiNqw0XiDIXbuGPk2mesymkxE",
  authDomain: "operation-independence.firebaseapp.com",
  databaseURL: "https://operation-independence.firebaseio.com",
  projectId: "operation-independence",
  storageBucket: "operation-independence.appspot.com",
  messagingSenderId: "261376376399"
};
var fire = firebase.initializeApp(config);

export default fire;
