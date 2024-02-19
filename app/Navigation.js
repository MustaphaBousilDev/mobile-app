import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PharmacyDetailsScreen from './screens/PharmacyDetailsScreen';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Register" options={{
          headerStyle: {
            backgroundColor: '#000', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Optionally set the font weight of the header title
          },
        }} component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen}   options={{
          title: 'Login', // Customize the title if needed
          headerStyle: {
            backgroundColor: '#000', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Optionally set the font weight of the header title
          },
        }}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: '#000', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Optionally set the font weight of the header title
          },
        }} />
                <Stack.Screen name="PharmacyDetails" options={{
          title: 'Details', // Customize the title if needed
          headerStyle: {
            backgroundColor: '#000', // Set the background color of the header
          },
          headerTintColor: '#fff', // Set the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold', // Optionally set the font weight of the header title
          },
        }} component={PharmacyDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
