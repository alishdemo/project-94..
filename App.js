import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from "./screens/Home"
import Contact from "./screens/Contact"
import Fees from './screens/Fees'
import Attendance from "./screens/Attendance"
import Information from "./screens/Information"

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  
    Home:Home,
  Contact: Contact,
  Fees:Fees,
  Attendance:Attendance,
  Information:Information

});

const AppContainer = createAppContainer(AppNavigator);