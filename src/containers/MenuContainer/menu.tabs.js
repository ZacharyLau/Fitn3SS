import { createMaterialTopTabNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import liftingTab from "./tabs/menu.liftingTab";
import cardioTab from "./tabs/menu.cardioTab";

const tabs = createAppContainer(
  createMaterialTopTabNavigator({
    Lifting: liftingTab,
    Cardio: cardioTab
  })
);

export default tabs;
