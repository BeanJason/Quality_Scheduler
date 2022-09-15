import React, {useState} from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, useWindowDimensions} from 'react-native'

import Logo from '../assets/logo.png'
import { commonStyles } from '../common/styles';
import UserInput from '../common/components/UserInput';
import CustomButton from '../common/components/CustomButton';
import {useForm, Controller} from 'react-hook-form';


const logInScreen = () => {
  // const [userID, setUserID] = useState('');
  // const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const {control, handleSubmit} = useForm();

  const onLoginPressed = () => {
    console.warn('Log in')
  }
  
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Pass')
  }


  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * .3}]} resizeMode="contain"/>
      <TextInput placeholder={'username'}/>
      <TextInput placeholder={'password'}/>
      {/* <UserInput placeholder="User ID" value={userID} setValue={setUserID}/>
      <UserInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/> */}

      <CustomButton 
        text="Login" onPress={onLoginPressed}
        />

<CustomButton 
        text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"
        />

    </View>
  )
};

export default logInScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginBottom: 20,
    width: '70%',
    maxHeight: 500,
    maxWidth: 500,
  },
});






//Library imports
// import { useLinkProps } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView } from "react-native";
// import { useEffect } from 'react';
// import { useForm } from "react-hook-form";

// // //screens/common components
// import { commonStyles } from '../common/styles';
// import UserInput from "../common/components/UserInput"



// export default function loginScreen({navigation}) {
//   const loginPressed = () => {
//     navigation.navigate('qualityTech')
//   };

//   //set vars for user input
// const {
//   control,
//   handleSubmit,
//   formState: { errors },
//   setError,
// } = useForm();

// //submit form
// const submitForm = (data) => {
//   data.email = data.email.trim();
//   dispatch(login(data));
// }
  
//     return (
//       <ImageBackground
//         style={[commonStyles.background]}
//         source={require("../assets/background.jpg")}
//         >
//           <SafeAreaView style={commonStyles.safeContainer}>
//             <View style={[commonStyles.outerContainer, {marginTop: 20}]}>
//               <UserInput 
//                 style={commonStyles.inputBox}
//                 icon="email"
//                 location="MaterialIcons"
//                 name="email"
//                 rules={{ required: "Email is Required "}}
//                 placeholder={"Email"}
//                 control={control}
//               />
//             </View>
//           </SafeAreaView>


//       </ImageBackground>
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });