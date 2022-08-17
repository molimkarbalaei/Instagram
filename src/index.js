// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

import "./wdyr";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/index.css"; // baraye call kardane tailwind bayad inportesh koni.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>
);

// client side rendered app: react (cra)
//---> our data base is firebase
// ---> external dependency: react-loading-skeleton
// styling ---> tailwindcss
// when we wanna store img in firebase we use seed

// Architecture:
// in src:
//---> components
//---> constants
//---> contex ->root
//---> helpers,
//---> hooks
//---> pages
//---> lib (firebase is going to live in here)
//---> services (firebase functions in here)
//---> styles (tailwindcss folder(app/tailwind))
