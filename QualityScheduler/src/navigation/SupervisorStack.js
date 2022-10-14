import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import TabNavigator from './TabNavigation';



const Stack = createNativeStackNavigator();

const SupervisorStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default SupervisorStack;

