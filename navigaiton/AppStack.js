// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/homeScreen';
import TakeTest from '../screens/takeTestScreen'


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TakeTest" component={TakeTest} />

    </Stack.Navigator>
  );
}

export default AppStack;
