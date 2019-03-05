import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "../../containers/AuthContainer/login.container";
//import Screen from "../../containers/PokemonContainer/pokemon.container";
//import Menu from "../../containers/MenuContainer/menu.container";
import MainBusiness from "./ExerciseNavigation";

const RootStack = createStackNavigator(
  { Login: LoginScreen, Menu: MainBusiness },
  {
    initialRouteName: "Login",
    headerMode: "none",
    NavigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(RootStack);
