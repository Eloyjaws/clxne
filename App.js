import React from 'react';
import { StatusBar } from 'react-native';
import MainNavigator from './Components/MainNavigator';

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
  }

  render() {
    return (
      <MainNavigator />
    );
  }
}