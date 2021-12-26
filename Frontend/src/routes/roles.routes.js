import React from "react";
import { Navigate } from "react-router-dom";
import { isAdmin } from "../functions/isAdmin.function";

// export const AdminRoute = ({
//   component: Component,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (isAdmin()) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Navigate replace to={{
//                 pathname: "/",
//                 state: {
//                   from: props.location
//                 }
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

export const AdminRoute = ({children}) => {
  return isAdmin() ? children : <Navigate to="/" />;
}