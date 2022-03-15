import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStackScreen from './HomeStack';
import TabStackScreen from './TabStack';
import DrawerStackScreen from './DrawerStack';


const Route = () => {
  return (
    <NavigationContainer>
        <DrawerStackScreen/>
    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})