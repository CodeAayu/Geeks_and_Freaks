import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import {ListItem, Card} from 'react-native-elements';

export default class profile extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
          };
      
    }

    componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        const url = `http://e0209ad0.ngrok.io/userqueues/`;
        this.setState({ loading: true });
    
        fetch(url,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username" : "Anushka Mittal"
            } )
        })
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res,
              error: res.error || null,
              loading: false,
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };


      render(){
          return (
              <View style = {{margin:40}}>
                  <SafeAreaView style = {{flex:1}}>
                  <Text>Profile page</Text>
                  
                  <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <View>
                                <Text>Event ID : {item.event_id}</Text>
                                <Text>Token Number : {item.token_number}</Text>
                            </View>
                        
                )}
                keyExtractor = {item => item.event_id}
            />
               </SafeAreaView>  
              </View>
          )
      }
}