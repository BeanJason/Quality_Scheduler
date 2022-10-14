import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/supervisor/HomeScreen';
import Supporvisor_Settings from '../screens/supervisor/Supervisor_Settings';
import RegisterNewUser from '../screens/supervisor/RegisterNewUser';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const SupervisorSettingsStack = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Settings" component={Supporvisor_Settings} />
        <Stack.Screen name="NewUser" component={RegisterNewUser} />
        
    </Stack.Navigator>
        
    );
};

const TabNavigator = () => {
    return(
    <Tab.Navigator screenOptions={{ 
        tabBarShowLabel: false,
        tabBarStyle: {},
    }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home-outline" color={color} size={size} />
            )
        }} />
        <Tab.Screen name="SettingsStack" component={SupervisorSettingsStack} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
    );
};

export default TabNavigator;