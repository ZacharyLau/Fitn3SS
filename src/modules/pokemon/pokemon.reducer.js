import { POKEMON_RETRIEVED } from "./pokemon.actions";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case POKEMON_RETRIEVED:
      return { ...state, move: action.payload };
    default:
      return state;
  }
};
