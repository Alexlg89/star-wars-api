import persons from "../../data/persons";

/**
 * Persons resolver
 */
export const getPersons = () => {
  return persons.map(person => {
    return {
      id: person.id,
      name: person.name,
      height: person.height,
      mass: person.mass,
      hair_color: person.hair_color,
      skin_color: person.skin_color,
      eye_color: person.eye_color,
      birth_year: person.birth_year,
      gender: person.gender
    };
  });
};

/**
 * Person resolver
 * @param {Int} id
 */
export const getPerson = id => {
  const data = persons.filter(person => person.id === id);
  return data[0];
};
