import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPlaceScreen from '../Screens/Place/ListPlace';
import DetailPlaceScreen from '../Screens/Place/DetailPlace';



const Stack = createNativeStackNavigator();

const PlaceStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Place" component={ListPlaceScreen} />
        <Stack.Screen name="DetailPlace" component={DetailPlaceScreen} />
    </Stack.Navigator>
  )
}

export default PlaceStackScreen