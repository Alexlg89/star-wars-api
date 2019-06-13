import React, { useState, useEffect } from "react";
import Species from "../../Species";
import { getSpecies } from "../../../graphql/queries";

const SpeciesOverview = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    getSpecies().then(data => {
      setSpecies(data.species);
    });
  }, []);

  return (
    <div>
      <h1>Species</h1>
      {species.map(species => (
        <Species species={species} key={`species${species.id}`} />
      ))}
    </div>
  );
};

export default SpeciesOverview;
