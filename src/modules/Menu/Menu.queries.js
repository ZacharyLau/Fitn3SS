import * as firebase from "firebase";
export const loadingExerciseMenu = () => {
  const { currentUser } = firebase.auth();
  return firebase.database().ref("exercises");
};

// const createSocketChannel = socket =>
//   eventChannel(emit => {
//     const handler = data => {
//       emit(data);
//     };
//     socket.on("‘newTask’", handler);
//     return () => {
//       socket.off("‘newTask’", handler);
//     };
//   });
