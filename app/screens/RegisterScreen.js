import { View, StyleSheet, TextInput, Button, Text, Pressable , TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react'
import { signup } from '../services/auth'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateToken } from '../services/auth';


function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem('userToken');
                if (token) {
                    // const result = await validateToken(token);
                    // console.log('User token is valid:', result);
                    navigation.replace('Home');
                } else {
                    // No token found, user needs to log in
                    console.log('No user token found. User needs to log in.');
                }
            } catch (error) {
                console.log('Error validating token:', error);
            }
        };

        getToken();
    }, [])

    const handleRegister = async () => {
        console.log('email: ' + email)
        console.log('password: ' + password)
        try {
            const user = await signup(email, password);
            console.log(user)
        } catch (error) {
            console.log(error)
        }

    }

    const goToLogin = () => {
        console.log('Go to login')
        navigation.navigate('Login');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Register
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#c6c6c6"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholderTextColor="#c6c6c6"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry
                placeholderTextColor="#c6c6c6"
            />
            <Pressable
                style={styles.Button}
                onPress={handleRegister}
            >
                <Text style={{ fontSize: 18, }}>register</Text>
            </Pressable>
            {error && <Text style={styles.errorText}>{error}</Text>}
            <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.loginText}>Already have an account? <Text style={styles.blueText}>Login</Text></Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        width: '100%',
        backgroundColor:'#333'
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        color:"#fff"
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:"#fff"

    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    Button: {
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        color: '#000',
        textAlign: 'center',
    },
    loginText: {
        marginTop: 20,
        fontSize: 16,
        color:"#fff",
    },
    blueText: {
        color: '#fff',
        textDecorationLine:'underline',
        fontSize:12,
    },
});


export default RegisterScreen