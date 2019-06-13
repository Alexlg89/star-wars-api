import React from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Planet = ({ planet, full }) => {
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
      <Card title={planet.name}>
        <div>Terrain: {planet.terrain}</div>
        <div>Climate: {planet.climate}</div>
        {full ? (
          <>
            <div>Rotation period: {planet.rotation_period}</div>
            <div>Orbital Period: {planet.orbital_period}</div>
            <div>Diameter: {planet.diameter}</div>
            <div>Gravity: {planet.gravity}</div>
            <div>Surface water: {planet.surface_water}</div>
            <div>People: {printPersons(planet.persons)}</div>
          </>
        ) : (
          <div className={styles.linkWrapper}>
            <Link to={`/planets/${planet.id}`}>More</Link>
          </div>
        )}
      </Card>
      {full && <Link to={`/planets/`}>Back</Link>}
    </>
  );
};

export default Planet;
