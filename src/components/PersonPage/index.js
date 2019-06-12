import React, { useState, useEffect } from "react";
import { getPerson } from "../../graphql/queries";
import Person from "../Person";
import styles from "./style.module.scss";

const PersonPage = ({ match }) => {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPerson(match.params.id).then(data => {
      setPerson(data.person);
    });
  }, []);

  return (
    <div className={styles.personPage}>
      {person ? <Person full person={person} /> : <div>Loading</div>}
    </div>
  );
};

export default PersonPage;
