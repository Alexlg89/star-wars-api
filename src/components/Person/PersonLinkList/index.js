import React from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

const PersonLinkList = ({ persons }) => {
  return persons.map((person, index) => {
    return (
      <span className={styles.personLink} key={`person${index}`}>
        <Link to={`/persons/${person.id}`}>{person.name}</Link>
      </span>
    );
  });
};

export default PersonLinkList;
