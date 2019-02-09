import { createAction } from "../../utils/actions";

export const GET_POKEMON = "@@POKEMON/GET_POKEMON";
export const POKEMON_RETRIEVED = "@@POKEMON/POKEMON_RETRIEVED";

export const getPokemon = payload => createAction(GET_POKEMON, payload);

export const actions = {
  getPokemon
};
