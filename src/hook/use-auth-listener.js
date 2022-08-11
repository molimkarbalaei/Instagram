import { useState, useEffect, useContext } from "react";
//usestate install and store the user
// useeffect for changes
// context listen to firebase
import FirebaseContext from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  // want to get the user from the firebase
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      // if we have the user then ==>we want to save it in the local storage

      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // if we don't have the user then ==>we want to remove it from the local storage
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    // for clean up the listener
    return () => listener();
  }, [firebase]);

  return { user };
}

// we use it listen when a user login or not
// mikhaym bebinim ghablan user bude ya na

// when we see react documentation about listener we see that we have to use useeffect
// we use context to don't recall again and again we want to use listener
