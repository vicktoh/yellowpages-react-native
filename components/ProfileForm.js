import React, { Component } from 'react';
import {Picker, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, Button, Text, Input} from 'react-native-elements'
import PhoneProps from '../constants/Layout';
import Colors from '../constants/Colors';
console.log(Colors)

const PHONE_SCREEN = PhoneProps.window


var regions = require('../constants/States.json');
var hustles = require('../constants/Hustle.json');
console.log(hustles);


export default class ProfileForm extends Component{


    render(){
        let {photoURL, displayName} = this.props.auth;
        return(
            <View style={styles.containerStyle}>
                <View style = {styles.topContainerStyle}>
                    <Text  style = {Colors.headerTextWithShadow}>Hello {displayName}</Text>
                    <Text style = {Colors.secondarySubHeading}>Please take a moment to complete your profile to started</Text>
                </View>
                <View style = {styles.bottomContainerStyle}>
                    {photoURL ? <Avatar showEditButton rounded source = {{uri : photoURL}} style={styles.avatarStyle} /> : <Avatar showEditButton title = "AV" style = {styles.avatarStyle} />  }
                    <Input value = {this.props.phone || ""} inputStyle = {styles.inputStyle} containerStyle={styles.inputContainerStyle} 
                    placeholder="Phone Number" placeholderTextColor = {Colors.secondaryText} />
                    <Picker style={styles.pickerStyle} itemTextStyle = {styles.pickerItemStyle} textStyle = {styles.pickerItemStyle}>
                        <Picker.Item  style = {styles.pickerItemStyle } value="" enabled={false} label="Select Your Location" />
                        {
                            regions.map((region, i) => {
                                return <Picker.Item key={i} value={region} label={region} />
                            })
                        }
                    </Picker>
                    <Picker placeholderTextColor = {Colors.secondaryText} style={styles.pickerStyle}>
                        <Picker.Item value="something" label="Select Your Hustle" />
                        {
                            hustles.map((hustle, i) => {
                                return <Picker.Item key={i} label={hustle.name} value={hustle.id} />
                            })
                        }
                    </Picker>
                    
                    
                    <Button title="Save" />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: Colors.backgroundColor
    },
    pickerStyle :{
        height: 60,
        width: PHONE_SCREEN.width * .8,
        ...Colors.formInputText,
    
    }, 
    pickerItemStyle:{
        ...Colors.formInputText
        
    },

    avatarStyle: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    inputContainerStyle: {
        width: PHONE_SCREEN.width * .8,
        height: 60,
    },
    inputStyle:{
        color: 'black'
    },
    bottomContainerStyle:{
        padding : 20,
        marginTop: 20,
        marginBottom: 20,
        ... Colors.shadow,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    topContainerStyle:{
        padding: 20,
    },
    buttonStyle:{
        ...Colors.formInputText
    }
    
}