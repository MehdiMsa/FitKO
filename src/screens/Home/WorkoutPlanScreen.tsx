import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

function WorkoutPlanScreen({ navigation }) {
    const exercises = ['Exercise 1', 'Exercise 2', 'Exercise 3']; // Example data

    return (
        <View style={styles.container}>
            <ScrollView>
                {exercises.map((exercise, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.exerciseItem}
                        onPress={() => navigation.navigate('ExerciseDescriptionScreen', { exercise })}
                    >
                        <Text>{exercise}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    exerciseItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
});

export default WorkoutPlanScreen;
