import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import { List, ListItem, SearchBar,Card ,Button,Header} from 'react-native-elements';
import {Bubbles} from 'react-native-loader';
import { createMaterialTopTabNavigator ,createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


export default class details extends Component {
    constructor(props) {
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
        const {state} = this.props.navigation;
        const url = `http://e0209ad0.ngrok.io/queuedata/`;
        this.setState({ loading: true });
    
        fetch(url,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                event_id : state.params.id
            } )
        })
          .then(res => res.json())
          .then(res => {
              console.log(res);
            this.setState({
              data: res,
              error: res.error || null,
              loading: false,
            });
            this.arrayholder = res;
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };

    render(){
        
        const {state} = this.props.navigation;
       

        return(
            <View>
                {/* {state.params.id == item.email ?<Text>Details Page</Text>:null} */}
                {/* <Text>{state.params.id}</Text> */}
                <ScrollView >
    <View style={styles.container}>
      <Image source={{uri: state.params.img}} style={styles.img} />
      <Text style={styles.txt}>{state.params.name}</Text>
      <Text style={styles.headings} >
        {state.params.genre}
      </Text>
      <Text style={styles.headings}>
      {(state.params.start).split('T',1)} - {(state.params.end).split('T',1)}
      </Text>
      <Text style={styles.headings}>Time
      </Text>
      <Text style={styles.headings}>{state.params.city}</Text>
      <View style={styles.contain} >
        <Text>{state.params.des}</Text>
        <View style={styles.contain1}><Text style={[{fontFamily: 'sans-serif'},{fontWeight: 'bold'},{fontSize: 15},{fontStyle:'italic'},{alignItems: 'center'}]}>NOTE
        Current Queue Length {this.state.data[0]}
        </Text></View>
      </View>
      <View style={styles.contain2}><Text>
        TERMS AND CONDITIONS
        </Text>
        </View>
        <View style={[{width: 330},{margin:10}]}>
        <Button title="Get a Token" backgroundColor="#1E90FF" color="#fff" onPress={()=>console.log("yaya")} />
        </View>
        </View>
    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    img: {
      height: 200,
      width: '100%',
      marginTop: 50,
    },
    txt: {
      fontSize: 25,
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
      fontStyle: 'italic',
      margin: 10,
    },
    headings: {
      fontSize: 20,
      fontFamily: 'sans-serif',
      fontStyle: 'italic',
      marginBottom: 5,
      marginLeft: 10,
    },
    contain:{
      padding: 50,
      width: 320,
      margin: 20,
      backgroundColor: '#fff99c',
    },
    contain2:{
      backgroundColor: '#DCDCDC',
      width: 330,
      margin: 10,
      padding: 20,
    },
    contain1:{
      backgroundColor: '#E0FFFF',
      width: 200,
      margin: 20,
      padding: 20,
    }
})