import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "../../containers/AuthContainer/login.container";
import Screen from "../../containers/PokemonContainer/pokemon.container";
import Menu from "../../containers/MenuContainer/menu.container";

const RootStack = createStackNavigator(
  { Login: LoginScreen, Menu: Menu },
  { initialRouteName: "Menu" }
);

export default createAppContainer(RootStack);
