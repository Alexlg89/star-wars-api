/**
 * Get all persons
 */
export const getPersons = async () => {
  return query("{ persons { id name gender birth_year } }");
};

/**
 * Get a specific person by id
 */
export const getPerson = async id => {
  return query(
    `{ person ( id: ${id} ) { id name gender birth_year height mass hair_color skin_color eye_color species { id name } homeworld { id name } } }`
  );
};

/**
 * Get all  species
 * @param {int} id
 */
export const getSpecies = async () => {
  return query(`{ species {id name classification designation} }`);
};

/**
 * Get a specific species by id
 * @param {int} id
 */
export const getSpecificSpecies = async id => {
  return query(
    `{ specificSpecies ( id: ${id} ) {id name classification designation average_height hair_colors skin_colors eye_colors average_lifespan language persons { id name }} }`
  );
};

/**
 * Get all Planets
 * @param {int} id
 */
export const getPlanets = async () => {
  return query(`{ planets { id name terrain climate } }`);
};

/**
 * Get a specific planet by id
 * @param {int} id
 */
export const getPlanet = async id => {
  return query(
    `{ planet ( id: ${id} ) { id name rotation_period orbital_period diameter climate gravity terrain surface_water persons { id name } } }`
  );
};

/**
 * Fetch the data from the graphql api
 *
 * @param {String} queryString
 */
const query = async queryString => {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ query: queryString })
  })
    .then(response => response.json())
    .then(json => json.data);
};

export default { getPersons, getPerson };
