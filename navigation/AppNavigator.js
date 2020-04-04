import {createStackNavigator} from '@react-navigation/stack';
import React, { Component } from 'react';
import { useStore } from 'react-redux';
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
    const store = useStore();
    const state = store.getState();
    console.log('store State',state);
    return(
    <Stack.Navigator>
        {
            state.auth.uid == null ?
            (
                <Stack.Screen name = "Auth"  options = {{headerShown: false}} component = {AuthNavigator} />
            ):
            (
                <Stack.Screen name = "Home" component = {HomeScreen}/>
            )
        }
        
        
    </Stack.Navigator>)
}
