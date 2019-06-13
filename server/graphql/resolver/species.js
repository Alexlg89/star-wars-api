import species from "../../data/species";

/**
 * Species resolver
 */
export const getSpecies = () => species;

/**
 * Specific species resolver
 * @param {Int} id
 */
export const getSpecificSpecies = id => {
  const data = species.filter(theSpecies => theSpecies.id === id);
  return data[0];
};
