import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ExerciseDescriptionScreen({ route, navigation }) {
    const { exercise } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.exerciseHeader}>{exercise}</Text>
            <Text>Description of the exercise goes here.</Text>
            <Button title="Start" onPress={() => navigation.navigate('BluetoothConnectionScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    exerciseHeader: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default ExerciseDescriptionScreen;
