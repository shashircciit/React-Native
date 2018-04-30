import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Welcome from './src/components/welcome';
import Login from './src/components/login';


const Approuter = StackNavigator({
  Welcome: {
    screen: Welcome
  },
  Login: {
    screen: Login
  },
 

});

export default class App extends Component {
  render() {
    return (
      <Approuter />
    );
  }
}

