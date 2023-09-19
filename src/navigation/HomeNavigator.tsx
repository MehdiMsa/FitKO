import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './navigationTypes';
import HomeScreen from '../screens/Home/HomeScreen';
// Import other screens...

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            {/* Add other screens... */}
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;
