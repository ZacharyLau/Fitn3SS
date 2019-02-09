import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { actions } from "../../modules/User/User.actions";

class Screen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>New project</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.loginUser({ email: "B@b.com", password: "111111" })
          }
        >
          <View style={{ height: 50, width: 200, backgroundColor: "red" }}>
            <Text>Tap this for some pokemon</Text>
          </View>
        </TouchableOpacity>
        <Text>{this.props.uid ? this.props.uid : "Loading..."}</Text>
      </View>
    );
  }
}

// state = {
//     pokemonReducer: {
//         moves: "transform"
//     },
//     userReducer: {
//         uid: "askjdfhlasdkhf"
//     }
// }
const mapStateToProps = state => {
  return {
    uid: state.userReducer.uid
  };
};

export default connect(
  mapStateToProps,
  actions
)(Screen);
