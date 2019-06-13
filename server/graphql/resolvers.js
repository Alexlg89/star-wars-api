import {
  getPerson,
  getPersons,
  getPersonsBySpecies,
  getPersonsByHomeworld
} from "./resolver/person";
import { getSpecies, getSpecificSpecies } from "./resolver/species";
import { getPlanet, getPlanets } from "./resolver/planet";

/**
 * Define the resolvers
 */
const resolvers = {
  Query: {
    person: (root, { id }) => getPerson(id),
    persons: getPersons,
    specificSpecies: (root, { id }) => getSpecificSpecies(id),
    species: getSpecies,
    planet: (root, { id }) => getPlanet(id),
    planets: getPlanets
  },
  Person: {
    species: ({ species }) => getSpecificSpecies(species),
    homeworld: ({ homeworld }) => getPlanet(homeworld)
  },
  Species: {
    persons: ({ id }) => getPersonsBySpecies(id)
  },
  Planet: {
    persons: ({ id }) => getPersonsByHomeworld(id)
  }
};

export default resolvers;
