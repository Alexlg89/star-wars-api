import React, { useState, useEffect } from "react";
import Species from "../../Species";
import { getSpecificSpecies } from "../../../graphql/queries";
import styles from "./style.module.scss";

const SpeciesDetails = ({ match }) => {
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    getSpecificSpecies(match.params.id).then(data => {
      setSpecies(data.specificSpecies);
    });
  }, [match.params.id]);

  return (
    <div className={styles.speciesPage}>
      <h1>Species</h1>
      {species ? <Species full species={species} /> : <div>Loading</div>}
    </div>
  );
};

export default SpeciesDetails;
