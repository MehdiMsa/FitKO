import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ProgressScreen() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Fetch the workout results of the current user from Firestore
        const subscriber = firestore()
            .collection('results')
            .where('userId', '==', auth().currentUser?.uid)
            .orderBy('timestamp', 'desc')
            .onSnapshot(querySnapshot => {
                const resultData = [];
                querySnapshot.forEach(documentSnapshot => {
                    resultData.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setResults(resultData);
            });

        // Unsubscribe from Firestore updates when the component is unmounted
        return () => subscriber();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Your Progress</Text>

            <FlatList
                data={results}
                renderItem={({ item }) => (
                    <View style={styles.resultItem}>
                        <Text>Date: {new Date(item.timestamp?.seconds * 1000).toLocaleDateString()}</Text>
                        <Text>Duration: {item.duration} seconds</Text>
                        <Text>Hits Detected: {item.hitsDetected}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        marginBottom: 20,
    },
    resultItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
});

export default ProgressScreen;
