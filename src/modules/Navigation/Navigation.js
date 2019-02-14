import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "../../containers/AuthContainer/login.container";
import Screen from "../../containers/PokemonContainer/pokemon.container";

const RootStack = createStackNavigator(
  { Login: LoginScreen, Pokemon: Screen },
  { initialRouteName: "Login" }
);

export default createAppContainer(RootStack);
