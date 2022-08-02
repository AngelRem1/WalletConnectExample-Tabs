import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import ConnectToWallet from '../screens/connectToWallet';



const Tabs = createBottomTabNavigator();

function BottomTabs () {
    return (
        <Tabs.Navigator
            initialRouteName="TabOne"
        >

            <Tabs.Screen name = "TabOne" component = {ConnectToWallet} options={ {headerShown: false}}/>

        </Tabs.Navigator>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return(
        <Stack.Navigator>

            <Stack.Screen name = 'Connect to wallet' component = {BottomTabs} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>

            <RootNavigator/>
            
        </NavigationContainer>
    )
}