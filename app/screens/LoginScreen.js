import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [seccess, setSuccess] = useState('');
    const navigation = useNavigation();

    const handleLogin = async () => {
        console.log(password)
        console.log(email)

        try {
            const result = await login(email, password);
            await AsyncStorage.setItem('userToken', result.stsTokenManager.accessToken);
            setError('');
            setSuccess('Login successful');
            setTimeout(() => {
                navigation.navigate('Home');
            }, 2000);
        } catch (error) {
            console.log(error);
            setError('Invalid email or password');
        }

    }
    const goToRegister = () => {
        console.log('Go to register')
        navigation.navigate('Register');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Login
            </Text>
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
            {/* <Button
                style={styles.Button}
                title="Login" onPress={handleLogin} /> */}
            <Pressable
                style={styles.Button}
                onPress={handleLogin}
            >
                <Text style={{ fontSize: 20, }}>Login</Text>
            </Pressable>
            {error && <Text style={styles.errorText}>{error}</Text>}
            {seccess && <Text style={styles.successText}>{seccess}</Text>}
            <TouchableOpacity onPress={goToRegister}>
                <Text style={styles.loginText}>Don't have an account?
                    <Text style={styles.blueText}> Register</Text></Text>
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
        borderColor:'#fff',
        color:"#fff",
        placeholder:{
            color:"#fff"
        }
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color:'#fff'

    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    successText: {
        color: 'green',
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
        color:'#FFF'
    },
    blueText: {
        color: '#fff',
        textDecorationLine:'underline',
        fontSize:12,
    },
});

export default LoginScreen