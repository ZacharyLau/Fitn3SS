import { createStackNavigator, createAppContainer } from "react-navigation";

import Menu from "../../containers/MenuContainer/menu.container";
import ExerciseSettingScreen from "../../containers/ExerciseSettingContainer/exercise.setting.container";

const ExerciseStack = createStackNavigator(
  { Menu: Menu, ExerciseSetting: ExerciseSettingScreen },
  { initialRouteName: "Menu" }
);

export default createAppContainer(ExerciseStack);
