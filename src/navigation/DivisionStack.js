import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Division from '../screens/Division';
const Stack = createStackNavigator();
export default function DivisionStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="division" component={Division} options={{title: 'Division de dos numeros'}} />
    </Stack.Navigator>
  );
}