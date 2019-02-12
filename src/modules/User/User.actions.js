import { createAction } from "../../utils/actions";

export const EMAIL_CHANGED = "@@USER/EMAIL_CHANGED";
export const PASSWORD_CHANGED = "@@USER/PASSWORD_CHANGED";

export const LOGIN_USER = "@@USER/LOGIN_USER";
export const LOGIN_SUCCESS = "@@USER/LOGIN_SUCCESS";
export const LOGIN_FAIL = "@@USER/LOGIN_FAIL";

const emailChanged = payload => createAction(EMAIL_CHANGED, payload);
const passwordChanged = payload => createAction(PASSWORD_CHANGED, payload);

const loginUser = payload => createAction(LOGIN_USER, payload);
const loginSuccess = payload => createAction(LOGIN_SUCCESS, payload);
const loginFail = payload => createAction(LOGIN_FAIL, payload);

export const actions = {
  loginUser,
  loginSuccess,
  emailChanged,
  passwordChanged,
  loginFail
}; //don't forget, new actions are here forever
