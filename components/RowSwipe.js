import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import ActionCard from './ActionCard';
import Styles from '../constants/Styles';

let actionProps = {
    title : "Adekunle",
    description: "Plumber and Tiler",
    imageURL: "https://graph.facebook.com/2929678180424206/picture",
    buttonTitle: "Assign Task"
}
let activities = [
    {
        title : "Jack Robson",
        description: "Plumber and Tiler",
        imageURL: "https://graph.facebook.com/2929678180424206/picture",
        buttonTitle: "Assign Task",
        time: 'now',
        id: '1'
    },
    {
        title : "Adekunle",
        description: "Plumber and Tiler",
        imageURL: "https://graph.facebook.com/2929678180424206/picture",
        buttonTitle: "Assign Task",
        time: "9m",
        id: '2'
    },
    {
        title : "Abdul Rahman",
        description: "Plumber and Tiler",
        imageURL: "https://graph.facebook.com/2929678180424206/picture",
        buttonTitle: "Assign Task",
        time: '3d',
        id: '3'
    },
    {
        title : "Becky Anderson",
        description: "Electrician, Installation",
        imageURL: "https://graph.facebook.com/2929678180424206/picture",
        buttonTitle: "Assign Task",
        time: '2w',
        id: '4'
    },
]


class RowSwipe extends Component {

    renderActivity(activity){

        return(
            <ActionCard  {...activity.item} />
        )
    }
    render(){
        return(
            <View>
                <FlatList data = {activities}
                renderItem = {this.renderActivity}
                keyExtractor = {activity=> activity.id}
                horizontal = {true}
                />
            </View>
        )
    }
}




export default RowSwipe;