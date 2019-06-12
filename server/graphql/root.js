import { getPerson, getPersons } from "./resolver/person";

// The root provides a resolver function for each API endpoint
const root = {
  person: ({ id }) => getPerson(id),
  persons: getPersons
};

export default root;
