import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

const RegisterScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            console.error("Passwords do not match.");
            return;
        }
        if (!acceptedTerms) {
            console.error("You must accept the terms and privacy policy.");
            return;
        }
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            // Once the user is registered, Firebase automatically logs them in.
            // You'll handle navigation to the main app in the RootNavigator's logic.
        } catch (error) {
            console.error("Registration failed: ", error);
        }
    };

    const handleGoogleRegister = () => {
        // Handle Google registration here
    };

    const handleAppleRegister = () => {
        // Handle Apple registration here
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
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity onPress={() => setAcceptedTerms(!acceptedTerms)}>
                <Text>{acceptedTerms ? '✅' : '⭕'} Accept Terms and Privacy Policy</Text>
            </TouchableOpacity>
            <Button title="Register" onPress={handleRegister} />
            <View style={styles.socialLoginContainer}>
                <TouchableOpacity onPress={handleGoogleRegister}>
                    <Text>Register with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleAppleRegister}>
                    <Text>Register with Apple</Text>
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

export default RegisterScreen;
