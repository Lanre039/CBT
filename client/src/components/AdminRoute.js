import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks";

const AdminRoute = ({ component: Component, ...rest }) => {
  const isAuthenticatedUser = useAuth("cbt_admin_token");
  return (
    <Route
      {...rest}
      render={(props) => {                                    
        if (isAuthenticatedUser("admin_user")) {
          return <Component {...props} />;
        } else return <Redirect to="/" />;
      }}
    />
  );
};

export default AdminRoute;
