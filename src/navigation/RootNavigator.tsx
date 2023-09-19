import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
const Stack = createStackNavigator();

const RootNavigator = () => {
    const [isInitialized, setIsInitialized] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const authSubscriber = firebase.auth().onAuthStateChanged(user => {
            setIsLoggedIn(Boolean(user));
            setIsInitialized(true);
        });

        // Unsubscribe on unmount
        return authSubscriber;
    }, []);

    if (!isInitialized) {
        return null; // Or a loading spinner
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'Main' : 'Auth'}>
                <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
