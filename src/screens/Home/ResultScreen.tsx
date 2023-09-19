import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function ResultScreen({ navigation, route }) {
    const { duration, hitsDetected } = route.params;

    const saveResultToFirestore = () => {
        firestore()
            .collection('results')
            .add({
                userId: auth().currentUser?.uid,
                duration,
                hitsDetected,
                timestamp: firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                console.log('Results saved successfully!');
                navigation.goBack(); // Go back to the workout plan screen after saving.
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>Duration: {duration} seconds</Text>
            <Text style={styles.resultText}>Hits Detected: {hitsDetected}</Text>

            <Button
                title="Save and Go Back to Workout Plan"
                onPress={saveResultToFirestore}
            />

            <Button
                title="Retry Exercise"
                onPress={() => navigation.navigate('TrainingScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    resultText: {
        fontSize: 18,
        marginBottom: 20,
    }
});

export default ResultScreen;
