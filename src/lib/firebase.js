import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//**
// here i want to import the seed file:

// becuase we need to connect our database so we need config:
const config = {};

console.log(Firebase);

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// ***
// here is where i want to call the seed file(only once)
//A seed file will contain dummy data that populates your database so that you can test
//if your models and associations are working the way you want them to.
// seedDatabase(firebase);

export { firebase, FieldValue };
