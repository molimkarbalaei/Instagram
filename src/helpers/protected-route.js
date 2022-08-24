// the duty of this file is to protect the route from unauthorized access
//is the user logged in?
// if not, redirect to login page
// if yes, allow the user to access the route

// import PropTypes from "prop-types";
// import { Route, Navigate } from "react-router-dom";
// import * as ROUTES from "../constants/routes";

// // we have to see if user logged in:
// // so user, children
// // az un route dakhel app baraye
// //...rest for passing other props

// export default function ProtectedRoute({ user, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) => {
//         if (user) {
//           return children;
//         }
//         if (!user) {
//           return (
//             <Navigate
//               // from route documentation:
//               to={{
//                 pathname: ROUTES.LOGIN,
//                 state: { from: location },
//               }}
//             />
//           );
//         }

//         return null;
//       }}
//     />
//   );
// }

// ProtectedRoute.propTypes = {
//   user: PropTypes.object,
//   children: PropTypes.object.isRequired,
// };

/// so for using this protected routes we go to app:

// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// export default function ProtectedRoute() {
//   const auth = null; // determine if authorized, from context or however you're doing it

//   // If authorized, return an outlet that will render child elements
//   // If not, return element that will navigate to login page
//   return auth ? <Outlet /> : <Navigate to="/login" />;
// }
