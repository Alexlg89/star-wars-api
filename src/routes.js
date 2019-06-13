import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import Landing from "./components/Pages/Landing";
import PersonOverview from "./components/Pages/PersonOverview";
import PersonDetails from "./components/Pages/PersonDetails";
import SpeciesOverview from "./components/Pages/SpeciesOverview";
import SpeciesDetails from "./components/Pages/SpeciesDetails";
import PlanetOverview from "./components/Pages/PlanetOverview";
import PlanetDetails from "./components/Pages/PlanetDetails";

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/persons" component={PersonOverview} />
        <Route exact path="/persons/:id" component={PersonDetails} />
        <Route exact path="/species" component={SpeciesOverview} />
        <Route exact path="/species/:id" component={SpeciesDetails} />
        <Route exact path="/planets" component={PlanetOverview} />
        <Route exact path="/planets/:id" component={PlanetDetails} />
      </Switch>
    </App>
  );
};

export default Routes;
