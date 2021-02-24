// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTeacher from '../screens/homeScreenTeacher';
import TakeTest from '../screens/takeTestScreen'


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="HomeTeacher">
      <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
      <Stack.Screen name="TakeTest" component={TakeTest} />

    </Stack.Navigator>
  );
}

export default AppStack;
