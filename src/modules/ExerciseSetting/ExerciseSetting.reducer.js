import { EXERCISE_SELECTED } from "./ExerciseSetting.actions";

const INITIAL_STATE = { selectedExercise: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXERCISE_SELECTED:
      return { ...state, selectedExercise: action.payload };
    default:
      return state;
  }
};
