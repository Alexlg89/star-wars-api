import React from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const Person = ({ person, full }) => {
  return (
    <>
      <Card title={person.name}>
        <div>Gender: {person.gender}</div>
        <div>Birthyear: {person.birth_year}</div>
        {full ? (
          <>
            <div>Height: {person.height}</div>
            <div>Mass: {person.mass}</div>
            <div>Haircolor: {person.hair_color}</div>
            <div>Skincolor: {person.skin_color}</div>
            <div>Eyecolor: {person.eye_color}</div>
            <div>
              Species:{" "}
              <Link to={`/species/${person.species.id}`}>
                {person.species.name}
              </Link>
            </div>
            <div>
              Homeworld:{" "}
              <Link to={`/planets/${person.homeworld.id}`}>
                {person.homeworld.name}
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.linkWrapper}>
            <Link to={`/persons/${person.id}`}>More</Link>
          </div>
        )}
      </Card>
      {full && <Link to={`/persons/`}>Back</Link>}
    </>
  );
};

export default Person;
