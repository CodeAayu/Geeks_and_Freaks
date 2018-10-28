import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';
import axios from 'axios';
import ImageFactory from 'react-native-image-crop-picker';


const Form = t.form.Form;

const User = t.struct({
  event_name: t.String,
  date_start:t.Number,
  date_end: t.Number,
  description: t.String,
  city:t.String,
  genre : t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
//   fields: {
//     email: {
//       error: 'Without an email address how are you going to reset your password when you forget it?'
//     },
//     password: {
//       error: 'Choose something you use on a dozen other sites or something you won\'t remember'
//     },
//     terms: {
//       label: 'Agree to Terms',
//     },
//   },
  stylesheet: formStyles,
};

export default class organiser extends Component {
    constructor(props){
        super(props);
    }

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    axios.post('http://e0209ad0.ngrok.io/neweventdetails/',value)
       .then(res =>{
           console.log(res);
       })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});

