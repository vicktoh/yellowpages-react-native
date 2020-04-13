import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {Button, SearchBar, Input ,Text, Avatar, Image} from 'react-native-elements'
import {connect} from 'react-redux';
import WelcomeComponent from '../components/WelcomeComponent';
import RowSwipe from '../components/RowSwipe';

import Styles from '../constants/Styles';
import Colors from '../constants/Colors';
import PhoneProps from '../constants/Layout';
import Icon from 'react-native-vector-icons/FontAwesome';

const WINDOW = PhoneProps.window;
const ACTIONS = [
  {
    id: 'Find',
    description: "Quickly get the services of top handymen around you.",
    title: "Find A Handyman",
    image: 'bgmain.jpg',
    page: 'post'
  },
  {
    id: 'Post',
    description: "Describe a job you require to get done, handymen will send their proposals for your job",
    title: "Post a Job",
    image: 'post.jpg',
    page: 'find'
  }
]


class HomeScreen extends Component{
  state = {
    search: '',
    recentJobs: []
  }

  renderAction(payload,navigate){
    let action = payload.item;
    let path = `../assets/images/${action.image}`
    
    return (
      <View key = {action.id} style = {styles.sectionContainer}>
          <Text style = {Styles.header2TextPrimary}>{action.title}</Text>
          <Image style = {styles.imageStyle} source = {action.image == "post.jpg" ? require('../assets/images/post.jpg') : require('../assets/images/bgmain.jpg')} containerStyle = {styles.imageContainerStyle}/>
          <Text style = {[Styles.secondaryText, { alignSelf: 'center',}]}>{action.description}</Text>
          <Button title = {action.id} buttonStyle = {styles.buttonStyle} containerStyle = {styles.buttonContainerStyle} onPress = {()=>{navigate(action.id)}} />
        </View>
    )
  }
  gotoScreen(id){
    this.props.navigation.navigate(id);
  }
  render = ()=> {
    const {search} = this.state;
    return(
    <View style = {styles.containerStyle}>
      <View style = {styles.headerContainerStyle}>
        <Text style = {Styles.headerTextPrimary}>Home</Text>
        <Avatar title = "AV" size = "medium" rounded source = {{ uri: this.props.auth.photoURL}} />
      </View>
      {
        this.state.recentJobs.length > 0 &&
          <View>
            <RowSwipe/>
          </View>
      }
      <FlatList 
      data = {ACTIONS}
      renderItem = {(activity) =>this.renderAction(activity, this.props.navigation.navigate)}
      keyExtractor = { item => item.id}
      />
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
  imageStyle:{
    height: 150,
    width: WINDOW.width * .9
  },
  imageContainerStyle:{
    margin: 10,
    alignSelf: 'center',
  },
  sectionContainer:{
    padding: 20,
    flextDirection: 'column',
    
  },
  buttonStyle:{
    backgroundColor: Colors.primaryColor
  },
  buttonContainerStyle:{
    marginTop: 20,

  }
}