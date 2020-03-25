import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements'
import {connect} from 'react-redux';
import ProfileForm from '../components/ProfileForm';






class SignupScreen extends Component{

  render(){
    console.log(this.props.auth)
    return (
      <ProfileForm auth = {this.props.auth} />
    )
  } 
}
const mapStateToprops = (state)=>{
  let {auth} = state;
  // console.log(auth)
  return { auth }
}

export default connect(mapStateToprops, {})(SignupScreen)

