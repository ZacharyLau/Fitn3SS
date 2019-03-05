import { LOAD_EXERCISE_SUCCESS, SELECT_EXERCISE } from "./Menu.actions";

const INITIAL_STATE = { exercises: {}, selectedExercise: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_EXERCISE_SUCCESS:
      return { ...state, exercises: action.payload };
    case SELECT_EXERCISE:
      return { ...state, selectedExercise: action.payload };
    default:
      return state;
  }
};
