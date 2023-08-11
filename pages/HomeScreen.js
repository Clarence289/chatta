import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatListItem from '../components/ChatListItem'
import HomeSearchComponent from '../components/HomeSearchComponent';
import ChatInputComponet from '../components/ChatInputComponet';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <ScrollView scrollEnabled={true}>
            <ChatListItem/>
            <ChatInputComponet/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#26394D'
    }
});