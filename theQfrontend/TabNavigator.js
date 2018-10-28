import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView} from 'react-native';
import { List, ListItem, SearchBar,Card ,Button,Header} from 'react-native-elements';
import {Bubbles} from 'react-native-loader';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import App from './src/Components/Tabs/All';
import Dancing from './src/Components/Tabs/dancing';
import Singing from './src/Components/Tabs/singing';


const tab = createMaterialTopTabNavigator({
    Home : {screen:App,
        navigationOptions : {
          tabBarLabel : 'All',
          tabBarIcon :({tintColor}) => (
            <Icon name ="ios-arrow-dropright-circle" color={tintColor} size={24} />
         )
        }
    },
   
    Dancing:{screen: Dancing,
      navigationOptions : {
        tabBarLabel : 'Dancing',
        tabBarIcon :({tintColor}) => (
          <Icon name ="ios-arrow-dropright-circle" color={tintColor} size={24} />
       )
      }
    },
    Singing: {screen: Singing,
      navigationOptions : {
        tabBarLabel : 'Singing',
        tabBarIcon :({tintColor}) => (
           <Icon name ="ios-arrow-dropright-circle" color={tintColor} size={24} />
        )
      }
    },
},{
  initialRouteName:'Home',
  order:['Home','Dancing','Singing'],
   activeColor: 'orange',
   inactiveColor: '#fff',
  barStyle: { backgroundColor: '#fff' },
  shifting:true
});

export default tab;
