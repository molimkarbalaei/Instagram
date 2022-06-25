import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = React.useContext(FirebaseContext);

  // for importing email and password:
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  // rules for email and password:
  const isValid = password === "" || emailAddress === "";

  // some actions if we submit click:
  const handLogin = () => {};

  // useeffect for checking if we are logged in:

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen bg-red-400 p-32">
      no idea
    </div>
  );
}

// login page:
// so we use useHistory because when we login go to dashboard.
// we need to acces to firebase
