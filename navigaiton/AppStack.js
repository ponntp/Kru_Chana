// In App.js in a new project

import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTeacher from '../screens/homeScreenTeacher';
import MakeQuestion from '../screens/makeQuestionScreen'


const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="HomeTeacher">
      <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
      <Stack.Screen name="MakeQuestion" component={MakeQuestion} />

    </Stack.Navigator>
  );
}

export default AppStack;
