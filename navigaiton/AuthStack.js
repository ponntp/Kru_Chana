// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/loginScreen'
import Register from '../screens/registerScreen'

const Stack = createStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{header: () => null}}/>
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd'
              
            }
          }) } />
        </Stack.Navigator>
  );
}


export default AuthStack;