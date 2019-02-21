import * as firebase from "firebase";
export const loadingExerciseMenu = () => {
  return firebase
    .database()
    .ref("/exercises/")
    .on();
};
