
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStudent from '../screens/homeScreen';
import TakeTest from '../screens/takeTestScreen'


const Stack = createStackNavigator();

function AppStudent() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeStudent" component={Home} />
      <Stack.Screen name="TakeTest" component={TakeTest} />

    </Stack.Navigator>
  );
}

export default AppStudent;
