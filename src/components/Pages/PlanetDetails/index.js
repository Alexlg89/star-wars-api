import React, { useState, useEffect } from "react";
import { getPlanet } from "../../../graphql/queries";
import Planet from "../../Planet";
import styles from "./style.module.scss";

const PlanetDetails = ({ match }) => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    getPlanet(match.params.id).then(data => {
      setPlanet(data.planet);
    });
  }, [match.params.id]);

  return (
    <div className={styles.planetPage}>
      <h1>Planets</h1>
      {planet ? <Planet full planet={planet} /> : <div>Loading</div>}
    </div>
  );
};

export default PlanetDetails;
