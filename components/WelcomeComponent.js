import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text, Image} from 'react-native-elements'
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';



const  WelcomeComponent = (props)=>{

  return (
    <View style = {styles.containerStyle}>
      <Text style = {{...Styles.header2TextSecondary, marginBottom: 5}}>{props.text}</Text>
      <Image source = {require('../assets/images/bgmain.jpg')} style = {styles.imageStyle} />
      <Text style = {Styles.secondaryText}>{props.description}</Text>
    </View>

  )
}

export default WelcomeComponent

const styles = {
    containerStyle:{
       marginTop: 5,
       paddingLef: 5,

    },
    imageStyle:{
      width: 200,
      height: 150,
      marginTop: 5,
      marginBottom: 5,
    },
    headingTextStyle:{

    },
    descriptionTextStyle:{
      
    }

}