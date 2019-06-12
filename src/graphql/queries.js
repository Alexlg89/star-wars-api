/**
 * Get all persons
 */
export const getPersons = async () => {
  return query("{ persons { id, name gender birth_year } }");
};

/**
 * Get a specific person by name
 */
export const getPerson = async id => {
  return query(
    `{ person ( id:  ${id} ) { name gender birth_year height mass hair_color skin_color eye_color } }`
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
