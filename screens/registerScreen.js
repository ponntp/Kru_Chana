import * as React from 'react';
import {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {AuthContext} from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';

export default function loginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();

  const {register} = useContext(AuthContext);

  const usersCollectionRef = firestore().collection('Users');
  
  const addusers = () => {
    usersCollectionRef.add({
      Name: name,
      Lastname: lastname,
      Email: email,
      Score: 0
    })};
    

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>REGISTER</Heading>
      <Input
        style={styles.input}
        labelValue={name}
        onChangeText={(userName) => setName(userName)}
        placeholder="Name"
        autoCapitalize={true}
        autoCorrect={false}
      />
      <Input
        style={styles.input}
        labelValue={lastname}
        onChangeText={(userLastname) => setLastname(userLastname)}
        placeholder="Lastname"
        autoCapitalize={true}
        autoCorrect={false}
      />
      <Input
        style={styles.input}
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholder="Email"
        keyboardType={'email-address'}
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
        title={'Sign Up'}
        style={styles.loginButton}
        onPress={() => {register(email, password, name, lastname); addusers()}}
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
