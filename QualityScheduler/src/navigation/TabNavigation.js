import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/supervisor/HomeScreen';
import Supporvisor_Settings from '../screens/supervisor/Supervisor_Settings';

import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="Settings" component={Supporvisor_Settings} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="settings-outline" color={color} size={size} />
            )
        }}/>
    </Tab.Navigator>
    );
};

export default TabNavigator;