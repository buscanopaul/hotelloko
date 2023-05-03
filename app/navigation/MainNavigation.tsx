import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HotelDetailsScreen from '../screen/HotelDetailsScreen';
import OnBoardingScreen from '../screen/OnBoardingScreen';
import { MainStackParamList } from '../types/MainStackParamsList';
import TabsNavigation from './TabsNavigation';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Tabs" component={TabsNavigation} />
        <Stack.Screen name="HotelDetails" component={HotelDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
