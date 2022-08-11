import { useContext } from "react";
import FirebaseContext from "../context/firebase";
// for gives the function to sign the user out
import UserContext from "../context/user";
import * as ROUTES from "../constants/routes";
import { Link, Navigate } from "react-router-dom";

// when we signout we have to make sure we have auth listener

export default function Header() {
  const { user } = useContext(UserContext);
  const { firebase } = useContext(FirebaseContext);
  console.log("user", user);

  return (
    <header className="h-16 bg-white border-b border-gray mb-8">
      <div className="container mx-auto mx-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to={ROUTES.DASHBOARD} aria-label="Instagram logo">
                <img
                  src="/images/logo.png"
                  alt="instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          {/* left side is the logo but the right side= signin and login now, */}
          <div className="text-gray-700 text-center flex items-center align-items">
            {/*  we have to check if there is the user: */}
            {user ? (
              <>
                {/* if there is we have link */}
                <Link to={ROUTES.DASHBOARD} arial-label="Dashboard">
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>
                {/* we need a button to let the user logout */}

                <button
                  type="button"
                  title="Sign Out"
                  onClick={() => {
                    firebase.auth().signOut();
                    Navigate(ROUTES.LOGIN);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      firebase.auth().signOut();
                      Navigate(ROUTES.LOGIN);
                    }
                  }}
                >
                  <svg
                    className="w-8 mr-6 text-black-light cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>

                {/* we need to create an avatar for the user:::: */}
                <div className="flex items-center cursor-pointer">
                  {/* by clicking this we want to go to the profile */}
                  <Link to={`/p/ ${user.displayName}`}>
                    <img
                      className="rounded-full h-8 w-8 flex"
                      src={`/images/avatars/${user.displayName}.jpg`}
                      alt={`${user.displayName} profile`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              // if the user not logged in we have to show the login and signup:
              <>
                <Link to={ROUTES.LOGIN}>
                  <button
                    type="button"
                    className="bg-blue-900 hover:bg-cyan-700 text-sm font-bold rounded text-white w-20 h-8"
                  >
                    Login
                  </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                  <button
                    type="button"
                    className="bg-white hover:bg-cyan-700 hover:text-black text-sm font-bold rounded text-blue-800 w-20 h-8"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// we want the user
// some links
// signout
//if not login so show login button
// soooo we need to acceess the firebase to show if we have the user or not
