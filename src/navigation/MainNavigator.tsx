import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/Home/ProfileScreen';
import ProgressScreen from '../screens/Home/ProgressScreen';
// ... import other main screens as well

const Tab = createBottomTabNavigator();

const MainStack = createStackNavigator();

const MainNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen name="Home" component={HomeScreen} />
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Progress" component={ProgressScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </MainStack.Navigator>
    );
};

export default MainNavigator;
