import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Saf } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useContext, useEffect}from 'react';


//screens
import AuthStack from './src/navigation/AuthStack';
import SupervisorStack from './src/navigation/SupervisorStack';
import { auth } from 'firebase';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
      
  );
}

const RootNavigation = () => {
  // const user = auth().currentUser;
  // console.log(user);

  const [loggedIn, setLoggedIn] = useState()
  useEffect(() => {
  //   const user = auth().currentUser;
  // if(user){
  //   loggedIn = true;
  // }else{
  //   loggedIn = false;
  // }
  // console.log(user);
  auth().onAuthStateChanged((user) => {
    if(user){
      setLoggedIn(true)  
    }else{
      setLoggedIn(false)  
    }
    console.log("RootNavigation state " + loggedIn)
  })
  
  },[])
  
  
  if(loggedIn) {
    console.log("Root nav: " + loggedIn)
    return(
      <SupervisorStack />
    )
  }else {
    console.log("Root nav else: " + loggedIn)
    return(<AuthStack />)
  }
  
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
