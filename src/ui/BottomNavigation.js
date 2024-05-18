import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import User from '../screens/User';
import Play from '../screens/Play';
import Flash from '../screens/Flashcards';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={User} />
      <Tab.Screen name="Play" component={Play} />
      <Tab.Screen name="Flash" component={Flash} />
    </Tab.Navigator>
  );
};

export default Bottom;
