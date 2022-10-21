import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Saf } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useContext, useEffect } from "react";

//screens
import AuthStack from "./src/navigation/AuthStack";
import SupervisorStack from "./src/navigation/SupervisorStack";
import TechStack from "./src/navigation/TechStack";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  collection,
  connectFirestoreEmulator,
  getDoc,
  query,
  queryEqual,
  where,
} from "@firebase/firestore";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [users, setUsers] = useState([]);
  const [isManager, setIsManager] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
        getUsers();
      } else {
        setLoggedIn(false);
        setUsers([]);
      }
      console.log("RootNavigation state " + loggedIn);
    });
  }, []);

  const getUsers = async () => {
    // try {
    //   const usersCollectionRef = collection(db, "users");
    //   console.log("curr user = " + auth.currentUser.email);
    //   const findUserQuery = query(
    //     usersCollectionRef,
    //     where("email", "==", auth.currentUser.email)
    //   );
    //   const findUsers = await getDocs(findUserQuery);
    //   const data = await getDocs(usersCollectionRef);
    //   console.log("data = " + data);
    //   console.log("users before set " + findUsers.email);

    //   findUsers.forEach((doc) => {
    //     setUsers(doc.data());
    //     console.log("data = " + doc.data());
    //     console.log("users after set " + users.type);
    //   });

    //   if (users.type == "Manager") {
    //     console.log("manager true");
    //     setIsManager(true);
    //   } else {
    //     console.log("manager false");
    //     setIsManager(false);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    console.log("getUsers");
    const usersCollectionRef = doc(db, "users", auth.currentUser.email);
    const userDoc = await getDoc(usersCollectionRef);
    if (userDoc.exists()) {
      let data = userDoc.data();
      console.log("here");
      console.log("doc data: ", userDoc.data());
      console.log("data type = " + data.type);
      if (data.type == "Manager") {
        console.log("manager true");
        setIsManager(true);
      } else {
        console.log("manager false");
        setIsManager(false);
      }
    } else {
      console.log("nope");
    }
  };

  return (
    <NavigationContainer>
      <RootNavigation loggedIn={loggedIn} isManager={isManager} />
    </NavigationContainer>
  );
}

//const usersCollectionRef = collection(db, "users");

const RootNavigation = ({ loggedIn, isManager }) => {
  // const user = auth().currentUser;
  // console.log(user);

  if (loggedIn) {
    if (isManager == true) {
      return <SupervisorStack />;
    } else {
      return <TechStack />;
    }
  } else {
    return <AuthStack />;
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
