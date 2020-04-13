import React, { Component } from 'react';
import {Button, Avatar} from 'react-native-elements';
import {Text, View} from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';


const ActionCard = (props) =>{
    return(
        <View style = {styles.cardContainerStyle} >
            <View style = {styles.headerContainerStyle} >
                <Avatar rounded title = "AV" source = {{uri: props.imageURL }} size = "medium" />
                <Text style = {Styles.secondaryTextSmall}>{props.time}</Text>
            </View>
            <Text style = {Styles.headerTextPrimary} >{props.title}</Text>
            <Text style = {Styles.secondaryText}>{props.description}</Text>
            <Button
             titleStyle = {styles.buttonTitleStyle}
              containerStyle = {styles.buttonContainerStyle}
              buttonStyle = {styles.buttonStyle}
               title = {props.buttonTitle}
                raised outline />
        </View>
    )
}
const styles = {
    cardContainerStyle:{
        width: 250,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        ...Styles.shadow
    },
    headerContainerStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    buttonTitleStyle:{
        fontFamily: Styles.FontNormal,
        fontSize: 16,
        color: 'white',
    },
    buttonContainerStyle:{
        marginTop: 10
    },
    buttonStyle:{
        backgroundColor: Colors.primaryColor
    }
}

export default ActionCard
