import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth';


const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            // If login is successful, the user will be redirected based on the RootNavigator's logic.
        } catch (error) {
            console.error("Login failed: ", error);
        }
    };

    const handleGoogleLogin = () => {
        // Handle Google login here
    };

    const handleAppleLogin = () => {
        // Handle Apple login here
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            <View style={styles.socialLoginContainer}>
                <TouchableOpacity onPress={handleGoogleLogin}>
                    <Text>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAppleLogin}>
                    <Text>Apple</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    input: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        borderRadius: 8,
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
});

export default LoginScreen;
