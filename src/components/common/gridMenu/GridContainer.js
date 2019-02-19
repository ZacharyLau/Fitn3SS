import React from "react";
import { View, Dimensions } from "react-native";
import { GridCell } from "./GridCell";

const GridContainer = ({ item, numColumns }) => {
  height = Dimensions.get("window").width / numColumns - 14;
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
      <GridCell item={item} height={height} />
    </View>
  );
};

const styles = {
  containerStyle: {
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
