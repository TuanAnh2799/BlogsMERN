import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home/Home';
import DetailScreen from '../Screens/Detail/Detail';


const Stack = createNativeStackNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: true,
        headerTitleAlign:'center',
        headerTitle: 'Home',
        headerLeft: () => (
            <FontAwesome5 name='bars' size={24} color='black' onPress={()=>navigation.toggleDrawer()}/>
        ),
        headerRight: () => (
            <FontAwesome5 name='search' size={24} color='black' />
        ),
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackScreen
