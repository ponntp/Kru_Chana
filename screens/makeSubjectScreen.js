import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Alert } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const subject = 'sssss'

const editSubject = () => {
    // subject = this.subject
    Alert.alert(subject)
}

class addSubject extends Component {

    constructor() {
        super();
    }
    
    render (){
      return (
        <ScrollView>
          <View style={styles.container}>
            
            <FilledButton 
                title='Math'
                style={styles.loginButton} 
                onPress={() => this.props.navigation.navigate('Make Name Exame')}
                // onPress={editSubject}
            />
            <FilledButton 
                title='English'
                style={styles.loginButton} 
                onPress={() => this.props.navigation.navigate('LinkToEng')}
                // onPress={editSubject}
            />
            <FilledButton 
                title='Science'
                style={styles.loginButton} 
                onPress={() => this.props.navigation.navigate('LinkToScience')}
                // onPress={editSubject}
            />
            <FilledButton 
                title='Software Process'
                style={styles.loginButton} 
                onPress={() => this.props.navigation.navigate('LinkToSoftwareProcess')}
                // onPress={editSubject}
            />
            <FilledButton 
                title='Code'
                style={styles.loginButton} 
                onPress={() => this.props.navigation.navigate('LinkToCode')}
                // onPress={editSubject}
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

  export default addSubject;