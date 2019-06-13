import { getPerson, getPersons, getPersonsBySpecies } from "./resolver/person";
import { getSpecies, getSpecificSpecies } from "./resolver/species";

/**
 * Define the resolvers
 */
const resolvers = {
  Query: {
    person: (root, { id }) => getPerson(id),
    persons: getPersons,
    specificSpecies: (root, { id }) => getSpecificSpecies(id),
    species: getSpecies
  },
  Person: {
    species: ({ species }) => getSpecificSpecies(species)
  },
  Species: {
    persons: ({ id }) => getPersonsBySpecies(id)
  }
};

export default resolvers;
