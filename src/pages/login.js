import React from "react";
import { useEffect } from "react";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { DASHBOARD } from "../constants/routes";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes"; // bring all the routes to this file

export default function Login() {
  const navigate = useNavigate();
  const { firebase } = React.useContext(FirebaseContext);

  // for importing email and password:
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  // rules for email and password:
  const isInvalid = password === "" || emailAddress === "";

  // some actions if we submit click:  2---
  const handLogin = async (event) => {
    //a) prevent the default behavior of the form:
    event.preventDefault();
    //b) login with email and password byt trytes and catch:
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      //c) if we are logged in, navigate to the home page:
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      //d) if we are not logged in, set the error message:
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  // useeffect for checking if we are logged in:

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  //********** */ we need for login:********
  // email and password are required
  // email and password must be valid
  // we need to check if we are logged in:
  // if we are logged in:
  // we need to navigate to the home page:
  // if we are not logged in:
  // we need to show an error message:
  // we need logo and sign up button:
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen p-32">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram app"
        />
      </div>
      <div className="flex flex-col w-2/5">
        {/* // flex-col for vertical alignment, in div badi */}
        <div className="flex flex-col items-center bg-white p-4 border border-gray-300 mb-4 rounded mb-2">
          <h1 className="flex justify-center w-full">
            <img
              src="/images/logo.png"
              alt="Instagram logo"
              className="mt-2 w-6/12 mb-4"
            />
          </h1>

          {error && <p className="mb-4 text-xs text-red-600">{error}</p>}

          {/* form submit: */}
          <form onSubmit={handLogin} method="POST">
            <input
              aria-label="Enter your email address"
              type="email"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            {/* password */}
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
            />
            {/* if u don't have account we need a button for creating */}
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-700 text-white w-full rounded h-8 font-bold
                ${isInvalid && "opacity-60"}`} // if is invalid give opacity 50
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-300">
          <p className="text-sm">
            Don't have an account?{` `}
            {/* this `` with 2 space= ke biad paeen. */}
            {/* we need a signup page: */}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// 1--- login page:
// so we use useHistory because when we login go to dashboard.
// we need to acces to firebase

//TODO****** add to tailwind config:
// we have to build these in tailwind:
// bg-blue-medium
// text-blue-medium
// text-red-primary  => hex values
// text-gray-base
//border - gray - primary;
// bg-blue-medium

//  2--- we need to add login handler and that item.
// we need to add a login handler:
// by using navigate and firebase.

// here the login page finished.************
