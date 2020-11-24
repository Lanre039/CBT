import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks";

const UserRoute = ({ component: Component, ...rest }) => {
  const isAuthenticatedUser = useAuth("cbt_user_token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticatedUser("normal_user")) {
          return <Component {...props} />;
        } else return <Redirect to="/" />;
      }}
    />
  );
};

export default UserRoute;
