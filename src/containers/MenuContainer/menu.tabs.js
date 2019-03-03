import { createMaterialTopTabNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import liftingTab from "./tabs/menu.liftingTab";
import cardioTab from "./tabs/menu.cardioTab";

// //test tab view ******************************************************************
const data = [
  {
    key: "Bench Press",
    image:
      "https://firebasestorage.googleapis.com/v0/b/fitn3ss-3790e.appspot.com/o/exercises%2Fbench_press.jpeg?alt=media&token=5fd9c10e-9db9-4089-93da-f2b3a881d649"
  }
];

const tabs = createAppContainer(
  createMaterialTopTabNavigator({
    Lifting: liftingTab,
    Cardio: cardioTab
  })
);

export default tabs;
