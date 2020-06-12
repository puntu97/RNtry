
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './assets/logo.png'; 



export default class SignUp extends React.Component {
  state = {
    name: '',surname: '', password: '', email: '', phone: '',taxnumber:''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { name,surname, password, email, phone,taxnumber } = this.state
    if ( name=='' || surname=='' || password=='' || email==''  || phone=='' || taxnumber=='' ){
      alert('A parameter or more are empty, please fill them')
	}
	else{
		alert('Enter a valid name')
	}
		
     console.log(name)
  }
 
  render() {
	  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

        <Text style={styles.text}>

        {'Registration OK'}
      </Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
	padding:10,

  },
  logo: {
	flex:5,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
	resizeMode: 'contain',
	margin:20
  },
  text: {
	textAlign: 'center',
    justifyContent: 'center',
	flex:10,
    color: '#888',
    fontSize: 50,
	padding:20,
 
  },
  button: {
	flex:1,
	alignSelf: 'center',
	justifyContent: 'center',
    backgroundColor: "#9400D3",
    padding: 10,
    borderRadius: 5,
	
  },
  buttonText: {

    fontSize: 20,
    color: '#fff',
  }, 
   input: {
	  flex:1,
	  margin:10,
	  padding:5,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
	  borderRadius: 5,


   },
  
});