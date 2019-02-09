import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { actions } from "./modules/pokemon/pokemon.actions";

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
        <TouchableOpacity onPress={() => this.props.getPokemon("ditto")}>
          <View style={{ height: 50, width: 200, backgroundColor: "red" }}>
            <Text>Tap this for some pokemon</Text>
          </View>
        </TouchableOpacity>
        <Text>{this.props.move ? this.props.move : "Loading...."}</Text>
      </View>
    );
  }
}

export const mapStateToProps = props => {
  return { move: props.pokemonReducer.move };
};

export default connect(
  mapStateToProps,
  actions
)(Screen);
