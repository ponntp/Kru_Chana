import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Alert } from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

let arrayDictStudents = [];

class examTest extends React.Component {
  constructor(props) {
    super(props);
    this.fireStoreData = firestore().collection("question1");
    this.state = {
      students : arrayDictStudents,
      userArr: []
    }
  }
  componentDidMount() {
    this.unsubscribe = this.fireStoreData.onSnapshot(this.getCollection);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const {ans, choice1, choice2, choice3, choice4, question} = res.data();
      userArr.push({
        key: res.id,
        res,
        ans,
        choice1,
        choice2,
        choice3,
        choice4,
        question
      })
    })
    this.setState({
      userArr
    })
  }

  render() {
    
    {
      this.state.userArr.map((item, i) => {
        arrayDictStudents.push({
              ans: item.ans,
              choice1: item.choice1,
              choice2: item.choice2,
              choice3: item.choice3,
              choice4: item.choice4,
              question: item.question
            }
            )

      })
      console.log(arrayDictStudents);


    }

    return (
      <Text>
        Eiei
      </Text>
      
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

export default examTest;