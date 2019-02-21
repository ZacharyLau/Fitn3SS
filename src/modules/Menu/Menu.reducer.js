import { LOAD_EXERCISE } from "./Menu.actions";

export default (state = "", action) => {
  switch (action.type) {
    case LOAD_EXERCISE:
      return { ...state, exercise: action.payload };
    default:
      return state;
  }
};
