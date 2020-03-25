import {createStackNavigator} from '@react-navigation/stack';
import React, { Component } from 'react';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Welcome" options = {{headerShown: false}} component = {WelcomeScreen} />
            <Stack.Screen name = "SignUp" options = {{headerShown: false}} component = {SignupScreen}  />
        </Stack.Navigator>
    )
}


export default AppNavigation = ()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name = "Auth"  options = {{headerShown: false}} component = {AuthNavigator} />
        <Stack.Screen name = "Home" component = {HomeScreen}/>
    </Stack.Navigator>)
}
