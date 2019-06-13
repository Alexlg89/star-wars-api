import React, { useState, useEffect } from "react";
import { getPersons } from "../../../graphql/queries";
import Person from "../../Person";

const PersonOverview = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons().then(data => {
      setPersons(data.persons);
    });
  }, []);

  return (
    <div>
      <h1>Persons</h1>
      {persons.map(person => (
        <Person person={person} key={`person${person.id}`} />
      ))}
    </div>
  );
};

export default PersonOverview;
