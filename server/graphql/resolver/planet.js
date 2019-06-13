import planets from "../../data/planets";

/**
 * Planets resolver
 */
export const getPlanets = () => planets;

/**
 * Planet resolver
 * @param {Int} id
 */
export const getPlanet = id => {
  const data = planets.filter(planet => planet.id === id);
  return data[0];
};
