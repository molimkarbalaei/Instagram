import React from "react";
import { useEffect } from "react";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { DASHBOARD } from "../constants/routes";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes"; // bring all the routes to this file
import { doesUsernameExist } from "../services/firebase";

export default function SignUp() {
  // general for all pages:
  const navigate = useNavigate();
  const { firebase } = React.useContext(FirebaseContext);

  // for signing up:
  const [username, setUsername] = React.useState("");
  const [fullName, setFullName] = React.useState("");

  // for importing email and password:
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  // rules for email and password:
  const isInvalid = password === "" || emailAddress === "";

  // some actions if we submit click:  2---
  const handSignup = async (event) => {
    //a) prevent the default behavior of the form:
    event.preventDefault();
    //b) if the username is taken:

    const usernameExists = await doesUsernameExist(username);
    if (!usernameExists) {
      try {
        // so if it exists we will have error:
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        // authenticate the user:
        // => email and password are correct & username (displayName)
        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        //firebase user collection (create a document)
        await firebase
          .firestore()
          .collection("users")
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ["2"],
            followers: [],
            dateCreated: Date.now(),
          });
        // navigate to the dashboard:
        navigate(ROUTES.DASHBOARD);

        // if it doesn't exist:
      } catch (error) {
        setError(error.message);
        setFullName("");
        setEmailAddress("");
        setPassword("");
      }
    } else {
      setError("Username already exists");
    }
  };

  // useeffect for checking if we are logged in:

  useEffect(() => {
    document.title = "Sign Up - Instagram";
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
          <form onSubmit={handSignup} method="POST">
            {/* Sign up: 1/ username: */}
            <input
              aria-label="Enter your userName"
              type="username"
              placeholder="UserName"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            {/* Sign up: 2/ full name: */}
            <input
              aria-label="Enter your FullName"
              type="fullName"
              placeholder="FullName"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />

            <input
              aria-label="Enter your email address"
              type="email"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            {/* password */}
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            {/* if u don't have account we need a button for creating */}
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-700 text-white w-full rounded h-8 font-bold
                ${isInvalid && "opacity-60"}`} // if is invalid give opacity 50
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-300">
          <p className="text-sm">
            Have an account?{` `}
            {/* this `` with 2 space= ke biad paeen. */}
            {/* we need a signup page: */}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// here the login page finished.************

// now we need to create a signup page
