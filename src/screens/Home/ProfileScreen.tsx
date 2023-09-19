import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ProfileScreen() {
    const [userDetails, setUserDetails] = useState({ name: '', age: '' });

    useEffect(() => {
        // This function fetches the user's data from Firestore when the component mounts
        const subscriber = firestore()
            .collection('users')
            .doc(auth().currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                if (documentSnapshot.exists) {
                    setUserDetails(documentSnapshot.data());
                } else {
                    Alert.alert('Error', 'No user data found!');
                }
            });

        // Stop listening for updates when the component unmounts
        return () => subscriber();
    }, []);

    const updateUserDetails = () => {
        firestore()
            .collection('users')
            .doc(auth().currentUser?.uid)
            .set(userDetails)
            .then(() => Alert.alert('Success', 'User details updated successfully!'))
            .catch(error => Alert.alert('Error', error.message));
    };

    return (
        <View>
            <TextInput
                placeholder="Name"
                value={userDetails.name}
                onChangeText={(name) => setUserDetails(prev => ({ ...prev, name }))}
            />
            <TextInput
                placeholder="Age"
                value={String(userDetails.age)}  // Convert number to string for TextInput
                onChangeText={(age) => setUserDetails(prev => ({ ...prev, age: Number(age) }))}
                keyboardType="numeric"
            />
            <Button title="Update Details" onPress={updateUserDetails} />
        </View>
    );
}

export default ProfileScreen;
