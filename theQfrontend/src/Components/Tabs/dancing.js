import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator,StyleSheet ,Image,ScrollView,SafeAreaView,TouchableHighlight} from 'react-native';
import { List, ListItem, SearchBar,Card ,Button,Header} from 'react-native-elements';
import {Bubbles} from 'react-native-loader';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Dancing extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        data: [],
        error: null,
      };
  
      this.arrayholder = [];
    }
  
    componentDidMount() {
      this.makeRemoteRequest();
    }
  
    makeRemoteRequest = () => {
      const url = `https://e0209ad0.ngrok.io/showeventdetails`;
      this.setState({ loading: true });
  
      fetch(url)
        .then(res => res.json())
        .then(res => {
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
  
    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            width: '86%',
            backgroundColor: '#CED0CE',
            marginLeft: '14%',
          }}
        />
      );
    };
  
    searchFilterFunction = text => {
      console.log(this.arrayholder);
      const newData = this.arrayholder.filter(item => {
        const itemData = `${item.event_name.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        data: newData,
      });
    };
  
    render() {

      const { navigate } = this.props.navigation;

      if (this.state.loading) {
        return (
          <View style = {styles.container}>
            <Bubbles size={40} color="blue" />
          </View>
        );
      }
        return (
          <View>
          <View style={styles.Header}>
          {/* <Header 
             placement="left"
            // leftComponent={<Icon name='menu' color='white'/>}
              centerComponent={{ text: 'The Q', style: { color: '#fff',fontSize:20} }}
              rightComponent={{ icon: 'home', color: '#fff' }}
         />  */}
         </View>
         <View containerStyle={{position:'absolute'}}>
         <SearchBar
           placeholder="Type Here..."
           lightTheme
           round
           onChangeText={text => this.searchFilterFunction(text)}
           autoCorrect={false}
         />
           </View>
         <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
         
           <FlatList
             data={this.state.data}
             renderItem={( {item} ) => (
               <View>
                
                 {item.genre == 'Dancing' ?<TouchableHighlight onPress = {()=>navigate('details',{id : item.event_id , name: item.event_name ,genre:item.genre,des:item.description ,start:item.date_start , end:item.date_end,img:item.event_cover_image,city:item.city })}>
                 <Card   containerStyle={{width:'90%',borderRadius:20}}>
                 
                <Text>{item.event_name}</Text>
                <Image style={{height: 150}}
              source={{uri: item.event_cover_image}}/> 
              <View ><Text >{item.genre}</Text></View>
              
            </Card></TouchableHighlight>:null}
                
              </View> 
             )}
             keyExtractor={item => item.email}
            // ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
           />
         </List>
         </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
          fontSize : 100,
          color: 'white',
        },
    Header:{
     width:'100%',
    },
    buttons:{
      display:'flex',
      flexDirection:'row',
      overflow:'scroll',
      margin:20,
      paddingBottom:20
    },
    button1:{
      borderRadius:20,
      backgroundColor:'gray',
    },
    text:{
      padding:20,
      fontSize:17
    }
  });
  