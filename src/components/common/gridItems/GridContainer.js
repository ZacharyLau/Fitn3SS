import React from "react";
import { Text, View, Dimensions } from "react-native";

const GridContainer = ({ item, numColumns }) => {
  height = Dimensions.get("window").width / numColumns;
  if (item.empty === true) {
    return (
      <View
        style={[
          styles.containerStyle,
          styles.containerInvisibleStyle,
          { height: height }
        ]}
      />
    );
  }

  return (
    <View style={[styles.containerStyle, { height: height }]}>
      <Text style={styles.itemTextStyle}>{item.key}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: "#4D243D",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 5
  },
  containerInvisibleStyle: {
    backgroundColor: "transparent"
  },
  itemTextStyle: {
    color: "#fff"
  }
};

export { GridContainer };
