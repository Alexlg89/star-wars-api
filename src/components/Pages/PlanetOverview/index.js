import React, { useState, useEffect } from "react";
import { getPlanets } from "../../../graphql/queries";
import Planet from "../../Planet";

const PlanetOverview = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data.planets);
    });
  }, []);

  return (
    <div>
      <h1>Planets</h1>
      {planets.map(planet => (
        <Planet planet={planet} key={`planet${planet.id}`} />
      ))}
    </div>
  );
};

export default PlanetOverview;
