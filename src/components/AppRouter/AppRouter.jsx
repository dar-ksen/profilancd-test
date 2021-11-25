import React from "react";
import { routers } from "../../router";
import { Redirect, Route, Switch } from "react-router-dom";

const AppRouter = () => {
  return (
    <Switch>
      {routers.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default AppRouter;
