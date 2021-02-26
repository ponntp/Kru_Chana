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

        this.fireStoreData = firestore().collection('SF210').doc('Name').collection('Name')
    this.state = {
      userArr: [],
      buttonName: ''
    };
    }
    componentDidMount() {
      this.unsubscribe = this.fireStoreData.onSnapshot(this.getCollection);
    }
    
    inputValueUpdate = (val, prop) => {
      const state = this.state;
      state[prop] = val;
      this.setState(state);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    getCollection = (querySnapshot) => {
      const userArr = [];
      querySnapshot.forEach((res) => {
        const {name} = res.data();
        userArr.push({
          key: res.id,
          res,
          name,
        });
      });
      this.setState({
        userArr,
      });
    };

    render (){
      
      return (
        <ScrollView>
          <View style={styles.container}>
          {this.state.userArr.map((item, i) => {
          return (
                <Button
                  title={item.name}
                  onPress={() => {
                    this.props.navigation.navigate(item.name);
                    this.props.navigation.navigate('ExamTest', {text: item.name});
                  }}
                />

          );
        })}
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