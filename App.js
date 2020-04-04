

import React, { Component, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native'
import * as Facebook from 'expo-facebook';
import { FACEBOOK_APP_ID} from './constants/keys';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './reducers/store';

import AppNavigator from './navigation/AppNavigator';


export default function App (props){
  var [ready, setReady] = useState(false);

  if(!ready){
    return(
      <AppLoading startAsync = {loadAssets} onFinish = {()=>setReady(true)} onError = {console.warn}/>
    )
     
  }
  return (
    <Provider store={store}>
      <PersistGate loadig={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PersistGate>

    </Provider>
    
    
  )
}


const styles = StyleSheet.create({
  containerStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle:{
    alignSelf: 'center',
  }
})

const loadAssets = async ()=>{
  await Promise.all([
    Font.loadAsync({
      'Playfair Display': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
      'Playfiar Display Bold' : require('./assets/fonts/PlayfairDisplay-Bold.ttf'),
    }),
    Asset.loadAsync(require('./assets/images/yp.jpg'))
  ])

    var firebaseConfig = {
        apiKey: "AIzaSyCSv-AV53vkXD5L2FlBc6XYIpSifwMgQvc",
        authDomain: "yellowpages-dev.firebaseapp.com",
        databaseURL: "https://yellowpages-dev.firebaseio.com",
        projectId: "yellowpages-dev",
        storageBucket: "yellowpages-dev.appspot.com",
        messagingSenderId: "342538515649",
        appId: "1:342538515649:web:316852812baca647191040",
        measurementId: "G-BM2M6GT5RR"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      console.log('Firebase started');
      Facebook.initializeAsync(FACEBOOK_APP_ID)

}