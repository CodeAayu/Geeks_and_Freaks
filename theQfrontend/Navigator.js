import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';

import { createDrawerNavigator , createStackNavigator , createTabNavigator } from 'react-navigation';

    // stack navigator screens
import tab from './TabNavigator';
import details from './src/details';

const stack = createStackNavigator({

    Home : {
      screen : tab
    },
    details : {
      screen : details
    },
    
  },{
      navigationOptions: ({ navigation }) => ({
          title: 'The Q',  // Title to appear in status bar
          headerStyle: {
              backgroundColor: '#333',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
  
      })
    
})

export default stack;