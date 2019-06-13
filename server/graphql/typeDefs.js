/**
 * Schema definition
 */
const typeDefs = `
  type Query {
    persons: [Person],
    person(id: Int): Person,
    species: [Species],
    specificSpecies(id: Int): Species,
    planets: [Planet],
    planet(id: Int): Planet
  }
  type Person {
    id: ID!,
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    species: Species!,
    homeworld: Planet!
  }
  type Species {
    id: ID!,
    name: String,
    classification: String,
    designation: String,
    average_height: String,
    skin_colors: String,
    hair_colors: String,
    eye_colors: String,
    average_lifespan: String,
    language: String,
    persons: [Person]!
  }
  type Planet {
    id: ID!,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    persons: [Person]!
  }
`;

export default typeDefs;
