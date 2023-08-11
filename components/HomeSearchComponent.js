import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

const HomeSearchComponent =() =>{
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} placeholder={'Search'}/>
    </View>
  );
}
export default HomeSearchComponent

const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 278,
    backgroundColor: '#fff',
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    fontSize: 15,
    width: '80%',
  },
});
