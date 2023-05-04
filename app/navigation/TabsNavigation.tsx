import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CalendarScreen from '../screen/CalendarScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import HomeScreen from '../screen/HomeScreen';
import MessageScreen from '../screen/MessageScreen';
import ProfileScreen from '../screen/ProfileScreen';

type TabsParamList = {
  Home: undefined;
  Favorite: undefined;
  Calendar: undefined;
  Message: undefined;
  Profile: undefined;
  HotelDetails: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <Entypo name="home" size={24} color="#4CA6FE" />
                ) : (
                  <Feather name="home" size={24} color="gray" />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <AntDesign name="heart" size={24} color="#4CA6FE" />
                ) : (
                  <Feather name="heart" size={24} color="gray" />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <FontAwesome5 name="calendar-day" size={24} color="#4CA6FE" />
                ) : (
                  <Feather name="calendar" size={24} color="gray" />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <MaterialIcons name="message" size={24} color="#4CA6FE" />
                ) : (
                  <Feather name="message-square" size={24} color="gray" />
                )}
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <Ionicons name="settings" size={24} color="#4CA6FE" />
                ) : (
                  <Feather name="settings" size={24} color="gray" />
                )}
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigation;
