// This component is used to protect the admin routes from unauthorized access

import { Navigate, Outlet } from "react-router-dom"; // React routing modules

// Defining the ProtectedAdmin component
const ProtectedAdmin = (props) => {
  // If credenciales or admin status are not defined, redirect to login page
  if (props.credenciales === "undefined") {
    return <Navigate to={"/"} replace />;
  }
  if (props.admin === "0") {
    return <Navigate to={"/"} replace />;
  }

  // If none of the above, render the children
  return props.children ? props.children : <Outlet />;
};

// Exporting the ProtectedAdmin component
export default ProtectedAdmin;
