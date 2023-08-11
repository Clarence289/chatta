import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const ChatInputComponet = () => {
  return (
    <View style={styles.container}>
        <View style={styles.leftView}>
        <View style={styles.emoji}/>
           <TextInput placeholder={'Type a Message'} style={styles.textInput}/> 
        <View style={styles.camera}/>
      <View style={styles.clip}/>
      </View>
      <View style={styles.mic}/>
      </View>
  )
}

export default ChatInputComponet

const styles = StyleSheet.create({
    container:{
        padding: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'red'
    },
    leftView:{
        height: 42,
        flex: 1,
        borderRadius: 21,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    emoji:{
        height: 21,
        width: 21,
        backgroundColor: '#fff'
    },
    textInput:{
        font: 13,
        color: "#4f4f4f",
        flex: 1
    },
    camera:{
        height: 21,
        width: 21,
        backgroundColor: '#4f4f4f'
    },
    clip:{
        height: 21,
        width: 21,
        backgroundColor: '#4f4f4f'
    }
});