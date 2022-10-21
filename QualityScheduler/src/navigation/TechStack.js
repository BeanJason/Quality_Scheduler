import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import TechTabNavigator from "./TechTabNavigator";

const Stack = createNativeStackNavigator();

const TechStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TechHomeScreen" component={TechTabNavigator} />
    </Stack.Navigator>
  );
};

export default TechStack;
