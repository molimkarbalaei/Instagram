import { createContext } from "react";

const FirebaseContext = createContext(null);
export default FirebaseContext;

// you do lots of func:
// provider--------Component 1---------- (firebase init here)
// --------Component 2----------
// --------Component 3----------
// consumer--------Component 4---------- (firebase init here)
// --------Component 5----------
// --------Component 6----------
// --------Component 7----------
// --------Component 8----------
// consumer--------Component 9---------- (firebase init here)

// if u like a photo so you have to access to that.
// u want to access to the fb--> use provider and consumer
