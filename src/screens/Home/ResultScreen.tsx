import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen: React.FC = ({ route, navigation }: any) => {
    // Assuming you pass the duration as a parameter from the TrainingScreen
    const { duration } = route.params;

    // Mock data: number of hits detected by the sensor
    const hitsDetected = Math.floor(Math.random() * 100);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training Results</Text>
            <Text style={styles.result}>Duration: {duration} seconds</Text>
            <Text style={styles.result}>Hits Detected: {hitsDetected}</Text>

            <TouchableOpacity
                style={styles.retryButton}
                onPress={() => navigation.navigate('Training')}>
                <Text>Try Again</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('WorkoutPlan')}>
                <Text>Back to Workout Plan</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    result: {
        fontSize: 20,
        marginBottom: 8,
    },
    retryButton: {
        padding: 16,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 16,
    },
    backButton: {
        padding: 16,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 16,
    },
});

export default ResultScreen;
