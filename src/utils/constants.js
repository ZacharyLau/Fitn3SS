export const pokemonQueryFactory = pokemon => {
  return `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
};

export const convertExerciseJsonToArray = exercises => {
  console.log(exercises);
  var array = [];
  for (exercise in exercises) {
    //console.log(exercise.exerciseName);
    arrayItem = {
      key: `${exercise.exerciseName}`,
      image: `${exercise.exerciseMenuPic}`
    };
    array.push(arrayItem);
  }

  return array;
};
