import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiPhy9g3MA4HZproLNBaRFOSRW0BjUx7o",
  authDomain: "amaoz-9dee4.firebaseapp.com",
  databaseURL: "https://amaoz-9dee4.firebaseio.com",
  projectId: "amaoz-9dee4",
  storageBucket: "amaoz-9dee4.appspot.com",
  messagingSenderId: "621429656150",
  appId: "1:621429656150:web:63b9af585b3ad2e9d289f7",
  measurementId: "G-JLGE3S0FFZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
