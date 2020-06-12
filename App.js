
import SignUp from './SignUp.js';
import Succes from './Succes.js';


import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import * as SplashScreen from 'expo-splash-screen';


const Stack = createStackNavigator();

SplashScreen.preventAutoHideAsync()
  .then(result => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))

class App extends React.Component {
	 componentDidMount() {
    // Hides native splash screen after 2s
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);
  }

render(){
   
   
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false }}
       initialRouteName="SignUp">
	   
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Succes" component={Succes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;
