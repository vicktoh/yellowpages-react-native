import React, {Component, useState} from 'react';
import {View} from 'react-native';
import {Button, Text, SocialIcon, Divider, Image} from 'react-native-elements'
import Colors from '../constants/Colors';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import {FACEBOOK_APP_ID, GOOGLE_ANDROID_CLIENT_ID, GOOGLE_IOS_CLIENT_ID, GOOGLE_APP_ID } from '../constants/keys'
import firebase from 'firebase';
import {connect} from 'react-redux';
import {signInSuccess} from '../actions/index';
import LoadingScreen from '../components/Loading';
import Loading from '../components/Loading';


class WelcomeScreen extends Component{

  state = {isLoading : false}
  constructor(){
    super();
    firebase.auth().onAuthStateChanged((user)=>{
      if(user == null){
        return
      }
      let { uid, email, displayName, photoURL } = user;
      this.props.signInSuccess({ uid, email, displayName, photoURL });
      this.props.navigation.navigate('SignUp');

    })
  }

  faceBookLogin = async ()=>{
    const  {type, token, permissions} = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID,{permissions:['public_profile', 'email']});
     let credentials =  firebase.auth.FacebookAuthProvider.credential(token);
     this.setState({isLoading:true});
     let firebaseCredential = await firebase.auth().signInWithCredential(credentials).catch((e)=>{
       console.log(e);
     })
     
     
     let {user} = firebaseCredential;
    
     


 }
 googleLogin = async ()=>{
     let config = {
         iosClientId: GOOGLE_IOS_CLIENT_ID,
         androidClientId: GOOGLE_ANDROID_CLIENT_ID,
         scopes: ['profile', 'email']
     }
     let result = await Google.logInAsync(config);
     let {type, accessToken, idToken} = result;
     console.log(type, accessToken, idToken);
     console.log('sisnging in firebase');
     this.setState({isLoading:true});
     let credentials =  firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
     await firebase.auth().signInWithCredential(credentials).catch((e)=>{
         console.log(e);
     });
    }
     
 
  render = ()=>{
    console.log(this.props.auth);
    
    if(this.state.isLoading){
      return (
        <Loading/>
      );
    }
    return (
      <View style = {styles.containerStyle}>
        <Text style = {styles.headerTextStyle}>yellowPages</Text>
        <View style = {styles.topContainerStyle}>
        <Image source = {require('../assets/images/mn.jpg')} style = { {flex: 1, position: "absolute", height: 300, margin: 0, padding: 0}} />
          <View style = {styles.textContainerStyle}>
          <Text style = {styles.descriptionText}>Redefining local household services around you, get the best handy workers around you.</Text>
          </View>
        </View>
        <View style = {styles.bottomContainerStyle}>
          <Text style = {{...styles.bottomTextStyle, alignSelf: 'center',}}>Get Started With</Text>
          <SocialIcon
            title='Start With Facebook'
            button
            light
            type='facebook'
            onPress = {this.faceBookLogin}
          />
          <Divider style={{ backgroundColor: 'grey' }} />
          <SocialIcon
            title='Start With Google'
            light
            button
            type='google'
            onPress = {this.googleLogin}
          />
        </View>
      </View>
  
    )
  }
}

const mapStateToProps = (state)=>{
  let {auth}  = state;
  return {auth}
};

export default connect(mapStateToProps, {signInSuccess})(WelcomeScreen)


const styles = {
  containerStyle:{
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    backgroundColor: Colors.headerTextColor
    
  },
  topContainerStyle: {  
    flex: 1,
    margin: 25,
    marginTop: 10,
    marginBottom: -20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2
    
    
    
  },
  headerTextStyle:{
    fontFamily: 'Playfiar Display Bold',
    fontSize: 40,
    color: 'yellow',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
    marginTop: 35,
    paddingLeft: 30
    
  },
  bottomTextStyle:{
    fontFamily: 'Playfair Display',
    color: '#8a8986',
  },
  descriptionText: {
    fontFamily: 'Playfiar Display Bold',
    color: Colors.headerTextColor,
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8
  },
  textContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomContainerStyle: {
    backgroundColor: Colors.headerTextColor,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingBottom: 50,
    zIndex: -2,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginTop: -20,
  }
}