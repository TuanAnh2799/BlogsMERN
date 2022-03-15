import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabStackScreen from './TabStack';
import ContactScreen from '../Screens/Contact/Contact';

const Drawer = createDrawerNavigator();


const DrawerStackScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:'#aa18ea',
        drawerActiveTintColor:'#fff',
        drawerLabelStyle: {
        marginLeft: 10,
        fontSize: 17,
        borderBottomColor: '#fff',
        borderBottomWidth: 0.5
        }
    }}
    initialRouteName="Homes">
        <Drawer.Screen name="Homes" component={TabStackScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerStackScreen

