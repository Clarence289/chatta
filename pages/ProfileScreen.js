import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://scontent.fdur1-1.fna.fbcdn.net/v/t39.30808-6/317604280_6138989449494377_651421174928152060_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=uPhRp4luA-QAX9Yhx2F&_nc_ht=scontent.fdur1-1.fna&oh=00_AfDK99ZmgRP3kCAJ80zIf_C8BgzO6uIZNtRiRzGq5ac6jw&oe=64D964B9',
                        }}
                    />
                    <View style={styles.camContainer}>
                        <Icon name="camera" size={24} color="black" /> {/* Display the camera icon */}
                    </View>
                </View>

            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} placeholder='Email' />
<TextInput style={styles.textInput} placeholder='Name' />
<TextInput style={styles.textInput} placeholder='Password' />
<TextInput style={styles.textInput} placeholder='Status' />

                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.saveOpt}>
                            <Text style={styles.saveText}>Save</Text>
                        </TouchableOpacity>
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
        backgroundColor: '#26394D',
        alignItems: 'center',
    },
    topContainer: {
        height: 280,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        position: 'relative',
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    camContainer: {
        width: 42,
        height: 42,
        borderColor: 'blue',
        position: 'absolute',
        top: 147,
        left: 147,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        backgroundColor: '#00ffff',
    },

    bottomContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    innerContainer: {
        height: 380,
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 20,
        width: 320,
    },
    
    textInput: {
        borderRadius: 15,
        borderColor: '#1EA0E5',
        borderWidth: 1,
        padding: 10,
        height: 46,
        marginVertical: 10
    },
    saveOpt: {
        backgroundColor: '#1EA0E5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        width: 280
    },
    saveText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold'
    },
    actionContainer:{
        height: 60,
        marginTop: 10,
        justifyContent: 'center'
    }


});
