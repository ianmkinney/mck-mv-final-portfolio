import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAppContext } from "../AppContext";

// The component checks for logged in users
// Redirect unauthenticated users to the home page

function ProtectRoutes(props) {
  const { component: Component, ...rest } = props;

  if (props.token) {
    return <Route {...rest} component={Component} />;
  } else {
    return <Redirect to="/" />;
  }
}

export default withAppContext(ProtectRoutes);
