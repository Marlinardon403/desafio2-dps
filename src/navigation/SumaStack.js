import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Suma from '../screens/Suma';
const Stack = createStackNavigator();
export default function SumaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="suma" component={Suma} options={{title: 'Suma de dos numeros'}} />
    </Stack.Navigator>
  );
}