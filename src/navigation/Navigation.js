import React from 'react';
import RestaStack from './RestaStack';
import SumaStack from './SumaStack';
import MultiStack from './MultiStack';
import DivisionStack from './DivisionStack';
import FactorialStack from './FactorialStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { InputAccessoryView } from 'react-native';
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suma" component={SumaStack} options={{title: 'Suma'}} />
      <Tab.Screen name="Resta" component={RestaStack} options={{title: 'Resta'}} />
      <Tab.Screen name="Multiplicacion" component={MultiStack} options={{title: 'Multiplicacion'}}/>
      <Tab.Screen name="Division" component={DivisionStack} options={{title: 'Division'}} />
      <Tab.Screen name="Factorial" component={FactorialStack} options={{title: 'Factorial'}} />
    </Tab.Navigator>
  );
}
