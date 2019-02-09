import { LOGIN_SUCCESS } from "./User.actions";

export default (state = {}, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, uid: action.payload };
    default:
      return state;
  }
};
