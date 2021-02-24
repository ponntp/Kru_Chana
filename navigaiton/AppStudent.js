
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeStudent from '../screens/homeScreenStudent';


const Stack = createStackNavigator();

function AppStudent() {
  return (
    <Stack.Navigator initialRouteName="HomeStudent">
      <Stack.Screen name="HomeStudent" component={HomeStudent} />

    </Stack.Navigator>
  );
}

export default AppStudent;
