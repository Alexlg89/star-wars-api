import React, { useState, useEffect } from "react";
import { getPersons } from "../../graphql/queries";
import Person from "../Person";

const PersonsPage = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons().then(data => {
      setPersons(data.persons);
    });
  }, []);

  return (
    <div>
      {persons.map(person => (
        <Person person={person} key={`person${person.id}`} />
      ))}
    </div>
  );
};

export default PersonsPage;
