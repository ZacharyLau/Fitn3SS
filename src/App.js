import React, { Component } from "react";
import { Provider } from "react-redux";
import firebase from "firebase";
import PokemonContainer from "./containers/PokemonContainer/pokemon.container";
import configureStore from "./store";
const store = configureStore();

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB89iuIMh718M0OEYlvLLQ4n6OjivMPx6M",
      authDomain: "fitn3ss-3790e.firebaseapp.com",
      databaseURL: "https://fitn3ss-3790e.firebaseio.com",
      projectId: "fitn3ss-3790e",
      storageBucket: "fitn3ss-3790e.appspot.com",
      messagingSenderId: "327827263698"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <PokemonContainer />
      </Provider>
    );
  }
}

export default App;
