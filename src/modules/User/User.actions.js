import { createAction } from "../../utils/actions";

export const LOGIN_USER = "@@USER/LOGIN_USER";
export const LOGIN_SUCCESS = "@@USER/LOGIN_SUCCESS";

const loginUser = payload => createAction(LOGIN_USER, payload);
const loginSuccess = payload => createAction(LOGIN_SUCCESS, payload);

export const actions = { loginUser, loginSuccess }; //don't forget, new actions are here forever
