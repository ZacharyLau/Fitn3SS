export const pokemonQueryFactory = pokemon => {
  return `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
};

export const localImage = image => {
  return `../../../pic/${image}`;
};
