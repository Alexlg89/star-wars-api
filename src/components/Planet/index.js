import React from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import PersonLinkList from "../Person/PersonLinkList";
import styles from "./style.module.scss";

const Planet = ({ planet, full }) => {
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
            {planet.persons.length > 0 && (
              <div>
                People: <PersonLinkList persons={planet.persons} />
              </div>
            )}
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
