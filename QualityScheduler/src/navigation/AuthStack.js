import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//screens
import SignInScreen from '../screens/SignInScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack;

