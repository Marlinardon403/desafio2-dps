import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Resta from '../screens/Resta';
const Stack = createStackNavigator();
export default function RestaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="resta" component={Resta} options={{title: 'Resta de dos numeros'}} />
    </Stack.Navigator>
  );
}
