import { createAction } from "../../utils/actions";

export const LOAD_EXERCISE = "@@MENU/LOAD_EXERCISE";
export const LOAD_EXERCISE_SUCCESS = "@@MENU/LOAD_EXERCISE_SUCCESS";

const loadExercise = () => createAction(LOAD_EXERCISE);
const loadExerciseSuccess = payload =>
  createAction(LOAD_EXERCISE_SUCCESS, payload);

export const actions = {
  loadExercise,
  loadExerciseSuccess
};
