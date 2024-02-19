import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import icons from Expo vector icons library$
import { signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function BottomBar() {
    const navigation = useNavigation();
    const handleOut= async ()=>{
        
        await AsyncStorage.setItem('userToken', '');
        navigation.navigate('Login');

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <MaterialCommunityIcons name="home" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <MaterialCommunityIcons name="account" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleOut()} style={styles.iconContainer}>
                <MaterialCommunityIcons name="out" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#000',
        paddingVertical: 10,
        borderTopColor: '#ccc',

    },
    iconContainer: {
        flex: 1, // Each icon occupies equal space
        alignItems: 'center', // Center icon horizontally
        color:'#fff'
    },
});

export default BottomBar;
