import { Navigate, Outlet } from "react-router-dom"; // React routing modules

// Defining the ProtectedRoute component
const ProtectedRoute = (props) => {
  // If credenciales are not defined, redirect to login page
  if (!props.credenciales || props.credenciales === "undefined") {
    return <Navigate to={"/"} replace />;
  }

  // If none of the above, render the children
  return props.children ? props.children : <Outlet />;
};

export default ProtectedRoute;
