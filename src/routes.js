import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import Landing from "./components/Pages/Landing";
import PersonOverview from "./components/Pages/PersonOverview";
import PersonDetails from "./components/Pages/PersonDetails";
import SpeciesOverview from "./components/Pages/SpeciesOverview";
import SpeciesDetails from "./components/Pages/SpeciesDetails";

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/persons" component={PersonOverview} />
        <Route exact path="/persons/:id" component={PersonDetails} />
        <Route exact path="/species" component={SpeciesOverview} />
        <Route exact path="/species/:id" component={SpeciesDetails} />
      </Switch>
    </App>
  );
};

export default Routes;
