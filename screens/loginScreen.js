import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {AuthContext} from '../navigaiton/AuthProvider';

export default function loginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <Input
        style={styles.input}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        keyboardType={'email-address'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        style={styles.input}
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        secureTextEntry={true}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => login(email, password)}
      />
      <TextButton
        title={'Forgot password?'}
        onPress={() => navigation.navigate('Register')}
      />
      <TextButton
        title={"don't have an account? Create one"}
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    marginBottom: 15,
  },
  loginButton: {
    marginVertical: 32,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 100,
  },
});
