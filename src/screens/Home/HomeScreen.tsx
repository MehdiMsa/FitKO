import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const HomeScreen: React.FC = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.settingIcon}>
                <Text>⚙️</Text>  {/* This is just a placeholder, replace with your actual icon */}
            </TouchableOpacity>

            <ScrollView horizontal style={styles.horizontalScrollView}>
                {/* Place your horizontal scroll view widgets here */}
                <TouchableOpacity style={styles.widget} onPress={() => navigation.navigate('WorkoutPlan')}>
                    <Text>Workout Plan 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.widget}>
                    <Text>Workout Plan 2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.widget}>
                    <Text>Workout Plan 3</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* ... Add more widgets as needed ... */}

            {/* Placeholder for Bottom Tabs */}
            <View style={styles.bottomTabs}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Progress')}>
                    <Text>Progress</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 16,
    },
    settingIcon: {
        alignSelf: 'flex-end',
        marginBottom: 16,
    },
    horizontalScrollView: {
        marginBottom: 16,
    },
    widget: {
        marginRight: 16,
        padding: 16,
        backgroundColor: 'lightgray',
        borderRadius: 8,
    },
    bottomTabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderTopWidth: 1,
        borderColor: 'lightgray',
    },
});

export default HomeScreen;
