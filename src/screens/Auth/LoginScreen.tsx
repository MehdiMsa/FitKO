import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            // Navigate to HomeScreen or any other screen after successful login
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={onLogin} />
            {/* Additional buttons for Google and Apple authentication can be added here */}
        </View>
    );
}

export default LoginScreen;
