import React from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Species = ({ species, full }) => {
  const printPersons = persons => {
    return persons.map(person => {
      return (
        <span className={styles.personLink}>
          <Link to={`/persons/${person.id}`}>{person.name}</Link>
        </span>
      );
    });
  };

  return (
    <>
      <Card title={species.name}>
        <div>Classification: {species.classification}</div>
        <div>Designation: {species.designation}</div>
        {full ? (
          <>
            <div>Average height: {species.average_height}</div>
            <div>Haircolors: {species.hair_colors}</div>
            <div>Skincolors: {species.skin_colors}</div>
            <div>Eyecolors: {species.eye_color}</div>
            <div>Average lifespan: {species.average_lifespan}</div>
            <div>language: {species.language}</div>
            <div>People: {printPersons(species.persons)}</div>
          </>
        ) : (
          <div className={styles.linkWrapper}>
            <Link to={`/species/${species.id}`}>More</Link>
          </div>
        )}
      </Card>
      {full && <Link to={`/species/`}>Back</Link>}
    </>
  );
};

export default Species;
