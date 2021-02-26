import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Alert } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


class test extends React.Component {
  constructor(props) {
    super(props);
    this.usersCollectionRef = firestore().collection('SF210').doc('Name').collection('Name')
    this.state = {
      name: ''
    };


  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() { 
    this.usersCollectionRef.add({
            name: this.state.name
          }).then((res) => {
              this.setState({
                  name: ''
              })
          })
          .catch((err) => {
              console.log('Error found: ', err);
              this.setState({
                  isLoading: false
              })
          })
      }

  render() {
    return (
        <ScrollView>
          <View style={styles.container}>
            <Input
                placeholder="Text"
                leftIcon={{ type: 'font-awesome', name: 'book' }}
                onChangeText = {(val) => this.inputValueUpdate(val, 'name')}
                style={styles}
            />
                <FilledButton title={'ADD QUESTION'} style={styles.loginButton} onPress={() => this.storeUser()} />
            <FilledButton 
                title='NEXT'
                style={styles.loginButton} 
                onPress={() => {
                  this.props.navigation.navigate('Math', {text: this.state.name});
                  this.storeUser()}
                }
               
            />
          </View>
        </ScrollView>

    );
  }
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
      marginBottom: 100

    }
});

export default test;