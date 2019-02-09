//this file stores every firebase queries for the user
import * as firebase from "firebase";
export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
