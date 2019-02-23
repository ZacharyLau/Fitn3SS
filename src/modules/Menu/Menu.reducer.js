import { LOAD_EXERCISE_SUCCESS } from "./Menu.actions";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_EXERCISE_SUCCESS:
      return { ...state, exercise: action.payload };
    default:
      return state;
  }
};
