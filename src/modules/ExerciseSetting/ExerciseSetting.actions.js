import { createAction } from "../../utils/actions";

export const CHOOSE_EXERCISE = "@@EXERCISING/CHOOSE_EXERCISE";
export const EXERCISE_SELECTED = "@@EXERCISING/EXERCISE_SELECTED";

const chooseExercise = payload => createAction(CHOOSE_EXERCISE, payload);
const exerciseSelected = payload => createAction(EXERCISE_SELECTED, payload);

export const actions = {
  chooseExercise,
  exerciseSelected
};
