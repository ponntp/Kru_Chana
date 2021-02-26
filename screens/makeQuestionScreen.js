import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


class addData extends Component {

  constructor() {
    super();
    this.usersCollectionRef = firestore().collection('SF210').doc('Subject').collection('Exam')
    
    this.state = {
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      choice4:"",
      ans: ""
    }

}

   inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
}

 storeUser() { 
  this.usersCollectionRef.add({
          question: this.state.question,
          choice1: this.state.choice1,
          choice2: this.state.choice2,
          choice3: this.state.choice3,
          choice4: this.state.choice4,
          ans: this.state.ans
        }).then((res) => {
            this.setState({
                question: '',
                choice1: '',
                choice2: '',
                choice3: '',
                choice4: '',
                ans:''
            })
        })
        .catch((err) => {
            console.log('Error found: ', err);
            this.setState({
                isLoading: false
            })
        })
    }
  
    render (){
      return (
        <ScrollView>
          <View style={styles.container}>


   <Input
     placeholder="Question"
     leftIcon={{ type: 'font-awesome', name: 'book' }}
     style={styles}
     value={this.state.question}
     onChangeText={(val) => this.inputValueUpdate(val, 'question')}
    />
    <Input
     placeholder="Choice 1"
     leftIcon={{ type: 'font-awesome', name: 'caret-right' }}
     style={styles}
     value={this.state.choice1}
     onChangeText={(val) => this.inputValueUpdate(val, 'choice1')}
    />
    <Input
     placeholder="Choice 2"
     leftIcon={{ type: 'font-awesome', name: 'caret-right' }}
     style={styles}
     value={this.state.choice2}
     onChangeText={(val) => this.inputValueUpdate(val, 'choice2')}
    />
    <Input
     placeholder="Choice 3"
     leftIcon={{ type: 'font-awesome', name: 'caret-right' }}
     style={styles}
     value={this.state.choice3}
     onChangeText={(val) => this.inputValueUpdate(val, 'choice3')}
    />

    <Input
     placeholder="Choice 4"
     leftIcon={{ type: 'font-awesome', name: 'caret-right' }}
     style={styles}
     value={this.state.choice4}
     onChangeText={(val) => this.inputValueUpdate(val, 'choice4')}
    />

    
    <Input
     placeholder="Answer"
     leftIcon={{ type: 'font-awesome', name: 'caret-right' }}
     style={styles}
     value={this.state.ans}
     onChangeText={(val) => this.inputValueUpdate(val, 'ans')}
    />
    
              <FilledButton title={'ADD QUESTION'} style={styles.loginButton} onPress={() => this.storeUser()} />
               
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
  export default addData;