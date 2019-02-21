import { createAction } from "../../utils/actions";

export const LOAD_EXERCISE = "@@MENU/LOAD_EXERCISE";

const loadExercise = payload => createAction(LOAD_EXERCISE, payload);

export const actions = {
  loadExercise
};
