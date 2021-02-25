import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Alert } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class exam extends Component {

    constructor() {
        super();

    }


    

    render (){
      
      return (
        <ScrollView>
          <View style={styles.container}>

            <Text>
              Exame 1
            </Text>
            
            <Button 
                title='Exame'
                style={styles.loginButton} 
                onPress={() => this.props.navigation.navigate('ExameTest')}
            />

            <Text>
              Exame 2
            </Text>
            <Button 
                title='Exame'
                style={styles.loginButton} 
            />

            <Text>
              Exame 3
            </Text>
            <Button 
                title='Exame'
                style={styles.loginButton} 
            />

          </View>
        </ScrollView>
      )
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

  export default exam;