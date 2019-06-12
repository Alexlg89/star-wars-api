import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    persons: [Person],
    person(id: Int): Person
  }
  type Person {
    id: Int
    name: String
    height: String
    mass: String
	  hair_color: String
		skin_color: String
		eye_color: String
		birth_year: String
		gender: String
  }
`);

export default schema;
