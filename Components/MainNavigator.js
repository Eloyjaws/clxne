import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import PhoneNumberScreen from "../Screens/PhoneNumberScreen";
import OtpScreen from "../Screens/OtpScreen";
import PasswordScreen from "../Screens/PasswordScreen";

const navigationOptions = {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2D03C0",
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF"
      }
    }
  }

const RegistrationNavigator = createSwitchNavigator(
  {
    stageOne: createStackNavigator({
        PhoneNumber: PhoneNumberScreen,
        Otp: OtpScreen
      }, navigationOptions),
    stageTwo: createStackNavigator({
        Password: PasswordScreen
    }, navigationOptions)
  },
  {
    initialRouteName: "stageOne",
  }
);

const Main = createAppContainer(RegistrationNavigator);

export default class MainNavigator extends Component {
  render() {
    return <Main />;
  }
}
