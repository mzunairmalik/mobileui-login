import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image, ScrollView } from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 130, height: 130 }}
        source={require('../assets/snack-icon.png')}></Image>
      <View style={{ marginTop: 40, width: '90%' }}>
        <TextInput style={styles.textInput} placeholder="Email"></TextInput>

        <TextInput style={styles.textInput} placeholder="Password"></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          onPress={() => alert('You have been Registered')}
          style={styles.reg}>
          Register
        </Text>
        <Text style={styles.reg} onPress={() => navigation.goBack()}>
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',

    alignItems: 'center',
  },

  textInput: {
    borderColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 20,
    marginTop: 20,
    paddingBottom: 7,
  },
  reg: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    backgroundColor: 'black',
    padding: 10,
    width: 120,
    textAlign: 'center',
  },
});
