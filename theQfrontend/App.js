import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import { List, ListItem, SearchBar,Card ,Button,Header} from 'react-native-elements';
import {Bubbles} from 'react-native-loader';
import { createMaterialTopTabNavigator ,createStackNavigator,createDrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import stack from './Navigator';
import organiser from './src/Components/Drawer/Author';
//import profile from '.src/Components/Drawer/profile';
import developer from './src/Components/Drawer/developer';

export default createDrawerNavigator({
    Home : {screen :stack},
    // profile : {screen: profile},
    developer : {screen: developer},
   Register_as_organiser : {screen : organiser} 
})

