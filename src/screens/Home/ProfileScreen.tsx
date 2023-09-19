import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ProfileScreen() {
    const [userDetails, setUserDetails] = useState({ name: '', age: '' });

    useEffect(() => {
        // Fetch user details from Firestore when the component mounts
        const subscriber = firestore()
            .collection('users')
            .doc(auth().currentUser?.uid)
            .onSnapshot(documentSnapshot => {
                setUserDetails(documentSnapshot.data());
            });

        // Unsubscribe from events when the component is unmounted
        return () => subscriber();
    }, []);

    const updateUserDetails = () => {
        firestore()
            .collection('users')
            .doc(auth().currentUser?.uid)
            .set(userDetails);
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
                value={userDetails.age}
                onChangeText={(age) => setUserDetails(prev => ({ ...prev, age }))}
            />
            <Button title="Update Details" onPress={updateUserDetails} />
        </View>
    );
}

export default ProfileScreen;
