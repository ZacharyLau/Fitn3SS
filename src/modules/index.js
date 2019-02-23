// Libraries
import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

//when a new object has been created, the coresponding reducer and saga must be imported and registered in this file
// Reducers
import pokemonReducer from "../modules/pokemon/";
import userReducer from "../modules/User/";
import menuReducer from "../modules/Menu/";

// Sagas
import { pokemonSaga } from "./pokemon/pokemon.saga";
import { userSaga } from "./User/User.saga";
import { exerciseMenuSaga } from "./Menu/Menu.saga";

export const appReducers = combineReducers({
  pokemonReducer,
  userReducer,
  menuReducer
});

export const rootSaga = function* rootSaga() {
  yield all([fork(pokemonSaga), fork(userSaga), fork(exerciseMenuSaga)]); //every time the project imports a saga, it must fork here like the example
};
