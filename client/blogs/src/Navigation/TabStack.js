import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeStackScreen from './HomeStack';
import PlaceStackScreen from './PlaceStack';
import ProfileStackScreen from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabStackScreen = () => {
  return (
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
          if (route.name === 'HomeStack') {
            iconName = 'home';
            size = focused ? 25 : 20;
          } else if (route.name === 'ProfileStack') {
            iconName = 'user';
            size = focused ? 25 : 20;
          }
          else if(route.name === 'PlaceStack')
          {
              iconName = 'crosshairs';
              size = focused ? 25 : 20;
          }
  
            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarHideOnKeyboard:true,
          showLabel: true,
          labelStyle: {fontSize: 15},
          style: {position:'absolute'},
          
        })}>
  
        <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        <Tab.Screen name="PlaceStack" component={PlaceStackScreen} />
        <Tab.Screen name="ProfileStack" component={ProfileStackScreen} />
        </Tab.Navigator>
    );
}

export default TabStackScreen
