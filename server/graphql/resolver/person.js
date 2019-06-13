import persons from "../../data/persons";

/**
 * Persons resolver
 */
export const getPersons = () => persons;

/**
 * Person resolver
 * @param {Int} id
 */
export const getPerson = id => {
  const data = persons.filter(person => person.id === id);
  return data[0];
};

/**
 * Persons by  Species resolver
 * @param {Int} speciesId
 */
export const getPersonsBySpecies = speciesId => {
  return persons.filter(person => person.species === speciesId);
};

/**
 * Persons by planet resolver
 * @param {Int} planetId
 */
export const getPersonsByHomeworld = planetId => {
  return persons.filter(person => person.homeworld === planetId);
};
