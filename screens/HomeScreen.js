import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, SearchBar, Input ,Text, Avatar} from 'react-native-elements'
import {connect} from 'react-redux';
import WelcomeComponent from '../components/WelcomeComponent';

import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import PhoneProps from '../constants/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';

const WINDOW = PhoneProps.window;



class HomeScreen extends Component{
  state = {
    search: '',
    recentJobs: []
  }
  render = ()=> {
    const {search} = this.state;
    return(
    <View style = {styles.containerStyle}>
      <View style = {styles.headerContainerStyle}>
        <Text style = {Styles.headerTextPrimary}>Home</Text>
        <Avatar title = "AV" size = "medium" rounded source = {{ uri: this.props.auth.photoURL}} />
      </View>
      <View>
        <SearchBar placeholder = "Search" 
        onChangeText = {(search)=>{this.setState({search})}}
        searchIcon = {
          <Icon name = "search" size = {24} color = {Colors.primaryText} />
        }
        value = {search}
        containerStyle = {styles.searchContainerStyle}
        inputContainerStyle = {styles.searchInputContainerStyle} 
        inputStyle = {styles.searchInputStyle} 
        />
        <View style = {{padding: 15}}>
          <Text style = {{...Styles.headerTextPrimary, fontSize: 20}}>Recent Activity</Text>
          {this.state.recentJobs.length > 0 ?
             <WelcomeComponent text = "Get started with local services near you" /> :
              <WelcomeComponent text = "Welcome" description = "Get the best local service providers around you"/>}
        </View>
      </View>
    </View>

  )}
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

  },
  searchContainerStyle:{
    backgroundColor: 'white',
    margin: 10,
    borderColor: Colors.primaryText,
    borderWidth: 1,
    borderTopColor: Colors.primaryText,
    borderBottomColor: Colors.primaryText,
    borderRadius: 10

  },
  searchInputStyle:{
    backgroundColor: 'white',
    textAlign : 'center',
    fontFamily: Styles.FontNormal,
  },
  searchInputContainerStyle:{
    backgroundColor: 'white'
  }
}