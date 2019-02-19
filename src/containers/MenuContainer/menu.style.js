import { StyleSheet, Dimensions } from "react-native";

const numColums = 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 2
  },
  item: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    height: Dimensions.get("window").width / numColums
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  itemText: {
    color: "#fff"
  }
});
