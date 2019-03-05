import { createAction } from "../../utils/actions";

export const LOAD_EXERCISE = "@@MENU/LOAD_EXERCISE";
export const LOAD_EXERCISE_SUCCESS = "@@MENU/LOAD_EXERCISE_SUCCESS";
export const SELECT_EXERCISE = "@@MENU/SELECT_EXERCISE";

const loadExercise = () => createAction(LOAD_EXERCISE);
const loadExerciseSuccess = payload =>
  createAction(LOAD_EXERCISE_SUCCESS, payload);
const selectExercise = payload => createAction(SELECT_EXERCISE, payload);

export const actions = {
  loadExercise,
  loadExerciseSuccess,
  selectExercise
};
