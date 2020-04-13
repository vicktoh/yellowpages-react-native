import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {View, Text, TouchableHighlight} from 'react-native';



class FindMap extends Component{

    render(){
        return (
            <View style = {styles.containerStyle}>
                <MapView style = {styles.mapStyle}>
                </MapView>
                <View style = {styles.overlayContainerStyle}>
                <Text>Inner Text</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle:{
        flex: 1
    },
    mapStyle:{
        flex: 1,
        
    },
    overlayContainerStyle:{
        position: 'absolute'
    }

}

export default FindMap