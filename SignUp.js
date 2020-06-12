
import React,{Component,useState} from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput  } from 'react-native';
import logo from './assets/logo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function SignUp ({ navigation: { navigate } }) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [phone, setPhone] = useState('');
   const [taxnumber, setTaxnumber] = useState('');

   
    function validateName(name) {
	var isValidName = false;
	if(name.match(/^[A-Za-z]+$/)) {
		isValidName = true;
		console.log(name)
	}
	return isValidName;
	}
	
	function validateSurname(surname) {
	var isValidName = false;
	if(surname.match(/^[A-Za-z]+$/)) {
		isValidName = true;
		console.log(surname)
	}
	return isValidName;
	}


	function validateEmail(email) {
	var bool = false;
	if(email.includes('@')) {
		bool = true;
	}
	return bool;
	}
	
	function validatePassword(password) {
	var bool = false;
	if(password.length>3 && password.length<19) {
		bool = true;
	}
	return bool;
	}
	
    function validateTaxnumber(taxnumber) {
	var bool = false;
	if(taxnumber.match(/^[0-9]+$/)) {
		bool = true;
	}
	return bool;
	}
	
	function validatePhone(phone) {
	var bool = false;
	if(phone.match(/^[0-9]+$/) && phone.length==9) {
		bool = true;
	}
	return bool;
	}
	
	

  
   function handleButton(){
	if(validateEmail(email)){
		console.log(email)
		if(validatePassword(password)){
			if(validateName(name)){
				if(validateSurname(surname)){
					if(validatePhone(phone)){
						if(validateTaxnumber(taxnumber)){
							navigate('Succes')
						}else{
						alert('TaxNumber not valid')
						}
					}else{
						alert('Phone not valid, it must be a numeric sequence of 9 numbers')
					}
				}else{
					alert('Surname not valid')
				}
			}else{
				alert('Name not valid')
			}
		}else{
			alert('Password length must be between 4 and 18 caracters')
		}
	}else{
		alert('Email not valid')
   }
   }
   
   
   
   return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
	  <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Email"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
		onChangeText={email => setEmail(email)}/>
            
      <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
		secureTextEntry={true}
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
		onChangeText={password => setPassword(password)}/>
		
	  <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Name"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
		onChangeText={name => setName(name)}/>
		
	  <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Surname"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
		onChangeText={surname => setSurname(surname)}/>
	  
	  <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Phone"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
		onChangeText={phone => setPhone(phone)}/>

	  <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Tax Number"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
		onChangeText={taxnumber => setTaxnumber(taxnumber)}/>
 

      <TouchableOpacity onPress={handleButton} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
 );
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
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
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