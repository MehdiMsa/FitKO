import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const BluetoothConnectionScreen: React.FC = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>Scan for available devices...</Text>
            <TouchableOpacity
                style={styles.device}
                onPress={() => {
                    // Mock-up: "Connect" to the device and proceed to TrainingScreen.
                    // In reality, this step will involve real Bluetooth connections. 
                    Alert.alert('Connected!', 'Successfully connected to device.', [
                        { text: 'OK', onPress: () => navigation.navigate('Training') }
                    ]);
                }}>
                <Text>Arduino Device 1</Text>
            </TouchableOpacity>
            {/* ... possibly list other devices ... */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    info: {
        fontSize: 16,
        marginBottom: 32,
    },
    device: {
        padding: 16,
        backgroundColor: 'lightgray',
        marginBottom: 16,
        borderRadius: 8,
    },
});

export default BluetoothConnectionScreen;
