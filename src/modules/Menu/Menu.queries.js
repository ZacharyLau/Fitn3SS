import * as firebase from "firebase";
export const loadingExerciseMenu = emitter => {
  const queryReference = firebase.database().ref("exercises");

  const subscirption = queryReference.once("value", snapshot => {
    const val = snapshot.val();
    emitter({ payload: val });
  });

  return () => queryReference.off(subscirption);
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
