import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as yup from 'yup';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required()
    });

    const handleSubmit = () => {
        schema.isValid({
            email: email,
            password: password,
        }).then(valid => {
            if (!valid) {
                Alert.alert('Form error', 'Form has invalid inputs', [{
                    text: 'Ok', onPress: ()=> console.log('Ok pressed')
                }])
            }else{

            }         
    });
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.appName}>
                    Chatta
                </Text>
            </View>
            <View style={styles.bottomContainer}>

                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder='Email'
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            style={styles.TextInput}
                            placeholder='Password'
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={() => handleSubmit()}>
                            <Text style={styles.signIn}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={styles.signUpOpt}>
    <Text style={styles.noAccText}>No account?</Text>
    <Text style={styles.signUpText}>Sign Up</Text>
</View>

                        <View style={styles.forgotPasswordCont}>
                            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        paddingVertical: 80,
        backgroundColor: '#26394D',
        alignItems: 'center'
    },
    topContainer: {
        flex: 1.2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appName: {
        fontFamily: 'berkshire',
        fontSize: 54,
        color: '#FFF',
    },
    bottomContainer: {
        flex: 2.8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        height: 320,
        backgroundColor: '#fff',
        borderRadius: 25,
        with: 320,
        padding: 20
    },
    inputContainer: {
        height: 120,
    },
    TextInput: {
        borderRadius: 15,
        height: 40,
        borderColor: '#1EA0E5',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10
    },
    actionContainer: {
        height: 140,
        top: 30

    },
    actionButton: {
        color: '#fff',
        backgroundColor: '#1EA0E5',
        borderRadius: 15,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signIn: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff'
    },
    signUpOpt: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    noAccText: {
        fontSize: 16
    },
    signUpText: {
        color: '#1EA0E5',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10
    },
    forgotPasswordCont: {
        alignItems: 'center',

    },
    forgotPasswordText: {
        color: '#1EA0E5',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
