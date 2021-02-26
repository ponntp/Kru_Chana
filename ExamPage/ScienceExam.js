import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, TouchableHighlight} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


let arrayDictStudents = [];
let score = [];
let outPutScore = 0;
let tempQuestion = [];

let kuy = "";

function FinishTest(){
  score = score.filter(function (item) {
    return item == 'Correct';
  });
  outPutScore = score.length;
  console.log(outPutScore);
}



function ScoreSystem(eachStudent, awnser){
  
  if (!(tempQuestion.includes(eachStudent["question"]))){
    tempQuestion.push(eachStudent["question"]);
    score.push("None");

    if (awnser == eachStudent["ans"]) {
      score.splice(tempQuestion.indexOf(eachStudent["question"]), 1, 'Correct');
    } else {
      score.splice(tempQuestion.indexOf(eachStudent["question"]), 1, 'Uncorrect');
    }
  } else {
    if (awnser == eachStudent["ans"]) {
      score.splice(tempQuestion.indexOf(eachStudent["question"]), 1, 'Correct');
    } else {
      score.splice(tempQuestion.indexOf(eachStudent["question"]), 1, 'Uncorrect');
    }
  }
  // console.log(tempQuestion);
  console.log(score);


}

class StudentTakeTest extends React.Component {
  constructor(props) {
    super(props);
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
const {text} = this.props.route.params
    console.log({text}.text)
    this.fireStoreData = firestore().collection("subject_Science").doc({text}.text).collection('Exam');
    
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
      <ScrollView>
      <View>
        {this.state.students.map(eachStudent => (
            <>
          <Text>
            {console.log(eachStudent)                   /*console log this*/} 
            {eachStudent.question}
          </Text> 

          <Button title={eachStudent.choice1} onPress={()=>{ScoreSystem(eachStudent , "1")}}></Button>
          <Button title={eachStudent.choice2} onPress={()=>{ScoreSystem(eachStudent , "2")}}></Button>
          <Button title={eachStudent.choice3} onPress={()=>{ScoreSystem(eachStudent , "3")}}></Button>
          <Button title={eachStudent.choice4} onPress={()=>{ScoreSystem(eachStudent , "4")}}></Button>
          <Text>
            {"\n"}
          </Text>

          </>
          
        ))}
      </View>
      <Text>{"\n"}</Text>

      <Button title = "Summit" onPress={() => {FinishTest()}}></Button>
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


  export default StudentTakeTest;