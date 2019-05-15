import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation';

import Home from './Home';
import Login from './Login';
import Register from './customer/Register'

const RootStack = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  Register : {screen : Register}
})

const RootTab = createBottomTabNavigator({
  Home: { screen: Home },
  Stacks: { screen: RootStack }
})

const RootDrawer = createDrawerNavigator({
  Stacks: {
    screen: RootStack,
    navigationOptions: {

    }
  },
  Tabs: {
    screen: RootTab,
    navigationOptions: {
    }
  },
  Login: {
    screen: RootTab,
    navigationOptions: {
    }
  }
})

const RootSwitch = createSwitchNavigator({
  Login : {screen : Login},
  App: {screen: RootDrawer}
});

const App = createAppContainer(RootSwitch);
export default App;







