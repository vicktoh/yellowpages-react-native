import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { useStore } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GetServiceScreen from '../screens/GetServiceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BussinessScreen from '../screens/BussinessScreen';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


const AuthNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Welcome" options = {{headerShown: false}} component = {WelcomeScreen} />
            <Stack.Screen name = "SignUp" options = {{headerShown: false}} component = {SignupScreen}  />
        </Stack.Navigator>
    )
}

const HomeStackNavigator = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Home" options = {{headerShown: false}}  component = {HomeScreen}/>
            <Stack.Screen name = "Profile" component = {ProfileScreen} />
            <Stack.Screen name = "Service" component = {GetServiceScreen} />
        </Stack.Navigator>
    )
}




export default AppNavigation = ()=>{
    const store = useStore();
    const state = store.getState();
    console.log('store State', state);
    return (
        state.auth.uid == null ?
            (
                <Stack.Navigator>
                    <Stack.Screen name="Auth" options={{ headerShown: false }} component={AuthNavigator} />
                </Stack.Navigator>
            ) :
            (
                <Tab.Navigator>
                    <Tab.Screen name="Default" component={HomeStackNavigator} />
                    <Tab.Screen name="Business" component={BussinessScreen} />
                </Tab.Navigator>
            )
    )
    
}
