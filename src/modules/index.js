// Libraries
import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

// Reducers
import pokemonReducer from "../modules/pokemon/";

// Sagas
import { pokemonSaga } from "./pokemon/pokemon.saga";

export const appReducers = combineReducers({
  pokemonReducer
});

export const rootSaga = function* rootSaga() {
  yield all([fork(pokemonSaga)]); //every time the project imports a saga, it must fork here like the example
};
