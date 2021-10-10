import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Factorial from '../screens/Factorial';
const Stack = createStackNavigator();
export default function FactorialStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="factorial" component={Factorial} options={{title: 'Factorial de un numero'}} />
    </Stack.Navigator>
  );
}