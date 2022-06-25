import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//**
// here i want to import the seed file:
// import { seedDatabase } from "../seed";
// becuase we need to connect our database so we need config:
const config = {
  apiKey: "AIzaSyAfovnzaiBGZAxV7ysGeZAUPU_GNQWDKz4",

  authDomain: "instagram-4e58f.firebaseapp.com",

  projectId: "instagram-4e58f",

  storageBucket: "instagram-4e58f.appspot.com",

  messagingSenderId: "174380937246",

  appId: "1:174380937246:web:ed3fc44669166ba03b3e0f",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// ***
// here is where i want to call the seed file(only once)
//A seed file will contain dummy data that populates your database so that you can test
//if your models and associations are working the way you want them to.
// seedDatabase(firebase);

console.log("firebase", firebase);
export { firebase, FieldValue };
