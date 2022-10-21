import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/native";
import AuthStack from "../../navigation/AuthStack";
import { commonStyles } from "../../common/styles";
import TaskCard from "../../common/components/TaskCard";

const TechHome = () => {
  const DATA = [
    { id: "1", title: "hotCheck" },
    { id: "2", title: "wash hands" },
  ];

  return (
    <SafeAreaView style={commonStyles.safeContainer}>
      <View style={styles.container}>
        <Text>Welcome: {auth.currentUser?.email}</Text>
        <Text>Tech Screen</Text>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={DATA}
          renderItem={({ item }) => <TaskCard taskInfo={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default TechHome;

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
