import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, Image } from 'react-native';

import { useState } from 'react';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 130, height: 130 }}
        source={require('../assets/snack-icon.png')}></Image>
      <View style={{ marginTop: 40, width: '90%' }}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
          placeholder="Email"></TextInput>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.textInput}
          placeholder="Password"></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          onPress={() =>
            alert(
              'Your entered Email is ' +
                email +
                '\nYour entered Password is ' +
                password
            )
          }
          style={styles.reg}>
          Sign in
        </Text>
        <Text
          style={styles.reg}
          onPress={() => navigation.navigate('Register')}>
          Register
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
