import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function TrainingScreen({ navigation }) {
    const [timer, setTimer] = useState(0); // Simple timer for this example

    const startExercise = () => {
        // Here, logic to start the exercise and communicate with Arduino can be added
        setTimer(30); // Example: 30 seconds timer
    }

    const finishExercise = () => {
        // Logic to record the results and pass to ResultScreen
        const results = {
            duration: timer,
            hitsDetected: 10, // Example data
        };

        navigation.navigate('ResultScreen', results);
    }

    return (
        <View style={styles.container}>
            <Text>Training Mode</Text>
            <Text>Remaining Time: {timer} seconds</Text>
            <Button title="Start Exercise" onPress={startExercise} />
            <Button title="Finish Exercise" onPress={finishExercise} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TrainingScreen;
