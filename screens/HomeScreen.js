import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Input ,Text, Avatar} from 'react-native-elements'
import {connect} from 'react-redux';

import Styles from '../constants/Styles';
import Colors from '../constants/Colors';



class HomeScreen extends Component{

  render = ()=> (
    <View style = {styles.containerStyle}>
      <View style = {styles.headerContainerStyle}>
        <Text style = {Styles.headerTextPrimary}>Home</Text>
        <Avatar title = "AV" size = "medium" rounded source = {{ uri: this.props.auth.photoURL}} />
      </View>
    </View>

  )
}

const mapStateToProps = ({auth}) =>{
  return {auth};
}

export default connect(mapStateToProps, {})(HomeScreen)




const styles = {
  containerStyle: {
    flex: 1,
  },
  headerContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    ...Styles.shadow,
    marginTop: 26,
  },
  headerTextStyle: {

  }
}