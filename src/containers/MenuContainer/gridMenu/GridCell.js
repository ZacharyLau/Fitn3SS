import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import navigationService from "../../../modules/Navigation/NavigationService";

const GridCell = ({ item, height }) => {
  const { key, image } = item;

  const { textStyle } = styles;

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigationService.navigate("ExerciseSetting", {
            key: { key }
          });
        }}
      >
        <Image
          source={{ url: image }}
          style={[{ width: height }, { height: height }]}
        />
        <Text style={textStyle}>{key}</Text>
      </TouchableOpacity>
    </View>
  );
};

// const navi =()=>{

// }

const styles = {
  imageStyle: {
    backgroundColor: "#4D243D",
    alignSelf: "stretch",
    //justifyContent: "center",
    flex: 1
  },

  textStyle: {
    position: "absolute",
    alignSelf: "baseline",
    paddingTop: 140,
    paddingLeft: 10,
    fontSize: 16,
    color: "white"
  }
};

export { GridCell };
