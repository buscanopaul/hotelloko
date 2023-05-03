import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';

type TabsParamList = {
  Home: undefined;
  HotelDetails: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
