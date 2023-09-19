import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingScreen: React.FC = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
                <Text>Update Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => {
                // TODO: Implement logout logic
            }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    option: {
        padding: 16,
        marginBottom: 8,
        backgroundColor: 'lightgray',
        borderRadius: 8,
    },
});

export default SettingScreen;
