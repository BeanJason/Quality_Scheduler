import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  navigation,
} from "react-native";
import React, { useContext, useState } from "react";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";
import TabNavigator from "../../navigation/TabNavigation";

//export const loggedOutContext = React.createContext()

const Supporvisor_Settings = ({ navigation }) => {
  //const [loggedOut, setLoggedOut] = useState(false)
  //const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigation.replace("Login")
        //setLoggedOut(true)
        //console.log(loggedOut)
      })
      .catch((error) => alert(error.message));
    console.log("HandleSignOut");
  };

  // const handleNewUser = () => {
  //   console.log("hadleNewUser clicked");
  //   navigation.navigate("RegisterNewUser", {name: "RegisterNewUser"})
  // }

  return (
    <View style={styles.container}>
      <Text>Settings: {auth.currentUser?.email}</Text>

      <View style={styles.buttonContainer}>
        {/* <loggedOutContext.Provider value={loggedOut}> */}
        <TouchableOpacity
          onPress={() => navigation.navigate("NewUser")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add New Tech</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        {/* </loggedOutContext.Provider> */}
      </View>
    </View>
  );
};

export default Supporvisor_Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
});
