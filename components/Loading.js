import React, { Component, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {View, Text} from 'react-native';
import {backgroundColor} from '../constants/Colors';



export default Loading = (props)=>{
    var animation = null;
    useEffect(()=>{
        this.animation.play()
    })

    return(
        <View style = {styles.containerStyle}>
            <LottieView source = {require('../assets/animations/loader1.json')}
            ref = { animation => {this.animation = animation}}
            style = {styles.animationStyle}
            />
        </View>
        
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor
    },
    animationStyle: {
        width: 300,
        height: 300,
    }
}