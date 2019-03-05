import React, { Component } from "react";
import {
  Card,
  CardSection,
  Input,
  Button,
  Spinner
} from "../../components/common";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import styles from "./Auth.style";
import { actions } from "../../modules/User/User.actions";

class LoginScreen extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return <Text style={styles.errorMessage}>{this.props.error}</Text>;
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderError()}
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@email.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.userReducer.email,
    password: state.userReducer.password,
    error: state.userReducer.error,
    loading: state.userReducer.loading,
    uid: state.userReducer.uid
  };
};

export default connect(
  mapStateToProps,
  actions
)(LoginScreen);
