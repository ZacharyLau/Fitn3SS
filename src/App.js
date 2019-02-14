import React, { Component } from "react";
import { Provider } from "react-redux";
import firebase from "firebase";

import AppContainer from "./modules/Navigation/Navigation";
import navigationService from "./modules/Navigation/NavigationService";
import configureStore from "./store";
import NavigationService from "./modules/Navigation/NavigationService";
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
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

export default App;
