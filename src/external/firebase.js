// Import the functions you need from the SDKs you need
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCBlwEU88ivwOuHEAW9YQoY9dqaAccryuY",
  authDomain: "perfectstay-366007.firebaseapp.com",
  projectId: "perfectstay-366007",
  storageBucket: "perfectstay-366007.appspot.com",
  messagingSenderId: "963644585212",
  appId: "1:963644585212:web:b18cc77166b206e1bb1379"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBazLIjF1aYUau7qThODXciMu_vh0iXHTU",
//   authDomain: "testingproject-c1a61.firebaseapp.com",
//   projectId: "testingproject-c1a61",
//   storageBucket: "testingproject-c1a61.appspot.com",
//   messagingSenderId: "630186460719",
//   appId: "1:630186460719:web:467de11ab14e25846568da",
//   measurementId: "G-L4Y6LE2Q8N"
// };

firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();
export default firebase;

