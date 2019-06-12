import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import LandingPage from "./components/LandingPage";
import PersonsPage from "./components/PersonsPage";
import PersonPage from "./components/PersonPage";

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/persons" component={PersonsPage} />
        <Route exact path="/person/:id" component={PersonPage} />
      </Switch>
    </App>
  );
};

export default Routes;
