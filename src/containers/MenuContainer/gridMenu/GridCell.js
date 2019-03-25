import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { actions } from "../../../modules/Exercising/Exercising.actions";
import navigationService from "../../../modules/Navigation/NavigationService";

class GridCell extends Component {
  onButtonPress(key, type) {
    this.props.exerciseSelected({ key, type });
  }

  render() {
    const { key, image, type } = this.props.item;
    const { textStyle } = styles;

    //console.log(this.props);

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.onButtonPress(key, type);
            navigationService.navigate("ExerciseSetting", {
              key: { key },
              type: { type }
            });
          }}
        >
          <Image
            source={{ url: image }}
            style={[
              { width: this.props.height },
              { height: this.props.height }
            ]}
          />
          <Text style={textStyle}>{key}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    backgroundColor: "#4D243D",
    alignSelf: "stretch",
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

//const mapStateToProps = state => {};

export default connect(
  null,
  actions
)(GridCell);
