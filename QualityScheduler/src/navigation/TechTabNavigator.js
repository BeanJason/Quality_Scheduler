import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

import TechHome from "../screens/tech/TechHome";
import TechSettings from "../screens/tech/TechSettings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TechSettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TechSettings" component={TechSettings} />
    </Stack.Navigator>
  );
};

const TechTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {},
      }}
    >
      <Tab.Screen
        name="Home"
        component={TechHome}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TechSettingsStack"
        component={TechSettingsStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TechTabNavigator;
