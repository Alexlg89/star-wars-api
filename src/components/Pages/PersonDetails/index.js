import React, { useState, useEffect } from "react";
import { getPerson } from "../../../graphql/queries";
import Person from "../../Person";
import styles from "./style.module.scss";

const PersonDetails = ({ match }) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPerson(match.params.id).then(data => {
      setPerson(data.person);
    });
  }, [match.params.id]);

  return (
    <div className={styles.personPage}>
      <h1>Persons</h1>
      {person ? <Person full person={person} /> : <div>Loading</div>}
    </div>
  );
};

export default PersonDetails;
