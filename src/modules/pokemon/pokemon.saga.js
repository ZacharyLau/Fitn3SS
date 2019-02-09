import { takeEvery, put } from "redux-saga/effects";
import { GET_POKEMON, POKEMON_RETRIEVED } from "./pokemon.actions";
import Axios from "axios";
import { pokemonQueryFactory } from "../../utils/constants";

export function* getPokemon(action) {
  const pokemonURL = pokemonQueryFactory(action.payload);
  const response = yield Axios.get(pokemonURL);
  console.log(response);
  yield put({
    type: POKEMON_RETRIEVED,
    payload: response.data.moves[0].move.name
  });
}

export function* pokemonSaga() {
  yield takeEvery(GET_POKEMON, getPokemon);
}
