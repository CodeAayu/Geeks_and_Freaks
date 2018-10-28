import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import {ListItem} from 'react-native-elements';

export default class developer extends Component {
    render(){
        const list =[
            {
                name : 'Anushka Mittal',
                subtitle : 'IIT Dhanbad'
            },
            {
                name : 'Saloni Mohta',
                subtitle : 'IIT Dhanbad'
            },
            {
                name : 'Raj Rani',
                subtitle : 'IIT Dhanbad'
            },
            {
                name : 'Aayush Ahuja',
                subtitle : 'IIT Dhanbad'
            },
        ]
        return (
            <SafeAreaView style = {{flex:1}}>
            <View style={{margin:30}}>

                <Text style={{fontSize:50,fontWeight:'600',padding:20}}>Developer's Page</Text>
                <View>
                    {
                        list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.name}
                            subtitle={l.subtitle}
                        />
                        ))
                    }
                </View>
            </View>
            </SafeAreaView>
        )
    }
}