import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './pages/LoginScreen'; // Correct the import path
import { useFonts } from 'expo-font';
import RegisterScreen from './pages/RegisterScreen';
import ProfileScreen from './pages/ProfileScreen';
import ChatListItem from './components/ChatListItem';
import HomeScreen from './pages/HomeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'berkshire': require('./fonts/berkshire.ttf')
  });

  if (!fontsLoaded) {
    return null; // You can return a loading indicator here
  }

  return (
    <View style={styles.container}>
      <HomeScreen/>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
