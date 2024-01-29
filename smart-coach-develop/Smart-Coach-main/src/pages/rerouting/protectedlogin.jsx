import { Navigate, Outlet } from "react-router-dom"; // React routing modules

// Defining the ProtectedLogin component
const ProtectedLogin = (props) => {
  // If credenciales are defined, redirect to home page
  if (props.credenciales) {
    return <Navigate to={"/home"} replace />;
  }

  // If none of the above, render the children
  return props.children ? props.children : <Outlet />;
};

// Exporting the ProtectedLogin component
export default ProtectedLogin;
