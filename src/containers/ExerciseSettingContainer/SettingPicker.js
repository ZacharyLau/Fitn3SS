import React from "react";
import { View, Text, Picker } from "react-native";

const SettingPicker = ({ width, height, title, maximumNumber }) => {
  const { containerViewStyle, titleStyle } = styles;

  return (
    <View style={containerViewStyle}>
      <Text style={titleStyle}>{title}</Text>
      <Picker style={{ width: width, height: height }}>
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
      </Picker>
    </View>
  );
};

const styles = {
  containerViewStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "relative"
  },
  titleStyle: {
    fontSize: 16,
    marginLeft: 5,
    marginRight: 5,
    alginSelf: "stretch",
    alginContent: "center"
  },
  PickerStyle: {}
};
