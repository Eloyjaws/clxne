import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import PhoneNumberScreen from '../Screens/PhoneNumberScreen';
import OtpScreen from '../Screens/OtpScreen';
import PasswordScreen from '../Screens/PasswordScreen';

const RegistrationNavigator = createStackNavigator({
    PhoneNumber: PhoneNumberScreen,
    Otp: OtpScreen,
    Password: PasswordScreen
},
{
  initialRouteName: 'PhoneNumber',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#2D03C0',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FFF',
    },
  },
})

const Main = createAppContainer(RegistrationNavigator)

export default class MainNavigator extends Component {
    render() {
    return (
        <Main />
    )
  }
}