import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './Screens/fb';
import Instagram from './Screens/in'

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
const tabNavigator= createBottomTabNavigator({
  facebook: {screen: Facebook},
  instagram: {screen: Instagram}
})
const AppContainer= createAppContainer(tabNavigator);
