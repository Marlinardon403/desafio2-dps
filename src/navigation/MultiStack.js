import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Multi from '../screens/Multi';
const Stack = createStackNavigator();
export default function MultiStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="multiplicacion" component={Multi} options={{title: 'Multiplicacion de dos numeros'}} />
    </Stack.Navigator>
  );
}