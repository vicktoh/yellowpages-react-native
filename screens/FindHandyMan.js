import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-elements'
import FindMap from '../components/FindMap'



class FindHandyMan extends Component{


  render(){
    return(
      <View style = {{flex: 1}}>
        <FindMap/>
      </View>
    )
  }
}


export default FindHandyMan;