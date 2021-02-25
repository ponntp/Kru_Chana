import * as React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Alert} from 'react-native';

let array = [
  ['How are you?', 'What is ur name?', 'try'],
  [1, 2, 4],
  [
    ['a', 'b', 'c', 'd'],
    ['1', '2', '3', '4'],
    ['a', 'b', 'c', 'd'],
  ],
];
let number = 0;
let rawScore = [];
let score = 0;
let isFinishTest = false;

function FillRawScore() {
  // Run only 1 time to fill raw score array to prevent skipping testNumber and "Splice" wrong data in "ScoreSystem."
  let i = 0;
  for (i = 0; i < array[0].length; i++) {
    rawScore.push('None');
  }
}

function ScoreSystem(userInput, awnser, testNumber) {
  // ********** ScoreSystem **********
  if (rawScore.length != array[0].length) {
    FillRawScore();
  }

  if (userInput == awnser) {
    rawScore.splice(testNumber, 1, 'Correct');
  } else {
    rawScore.splice(testNumber, 1, 'Uncorrect');
  }
  console.log(rawScore); //test temp
}


export default class StudentTakeTest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: number,
      choice1: array[2][number][0],
      choice2: array[2][number][1],
      choice3: array[2][number][2],
      choice4: array[2][number][3],
      question: array[0][number],
      checkFinish: isFinishTest,
    };
    this.onPressButton = this.onPressButton.bind(this);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
        {/*********** Test number ***********/}
        <Text style={{color: 'black', flex: 1, fontSize: 20}}>
          {' '}
          Test Number: {this.state.data + 1}
        </Text>

        {/*********** Question ***********/}
        <Text> {this.state.question} </Text>

        {/*********** Button choice ***********/}
        <Button
          title={this.state.choice1}
          onPress={() =>
            ScoreSystem(1, array[1][this.state.data], this.state.data)
          }></Button>
        <Button
          title={this.state.choice2}
          onPress={() =>
            ScoreSystem(2, array[1][this.state.data], this.state.data)
          }></Button>
        <Button
          title={this.state.choice3}
          onPress={() =>
            ScoreSystem(3, array[1][this.state.data], this.state.data)
          }></Button>
        <Button
          title={this.state.choice4}
          onPress={() =>
            ScoreSystem(4, array[1][this.state.data], this.state.data)
          }></Button>

        {/*********** Switch between button "Next" and "Finish" ***********/}
        {this.state.data == array[0].length - 1 ? (
          <Button title="Finish" onPress={this.onPressButton}></Button>
        ) : (
          <Button
            title="Next"
            onPress={() => {
              this.state.data == array[0].length - 1
                ? null
                : this.setState({
                    data: (this.state.data += 1),
                    choice1: array[2][this.state.data][0],
                    choice2: array[2][this.state.data][1],
                    choice3: array[2][this.state.data][2],
                    choice4: array[2][this.state.data][3],
                    question: array[0][this.state.data],
                  });
            }}></Button>
        )}

        {/*********** Show and Hide button "Back" ***********/}
        {this.state.data == 0 ? null : (
          <Button
            title="Back"
            onPress={() => {
              this.state.data - 1 < 0
                ? null
                : this.setState({
                    data: (this.state.data -= 1),
                    choice1: array[2][this.state.data][0],
                    choice2: array[2][this.state.data][1],
                    choice3: array[2][this.state.data][2],
                    choice4: array[2][this.state.data][3],
                    question: array[0][this.state.data],
                  });
            }}></Button>
        )}
      </View>
    );
  }
  onPressButton() {
    const {navigate} = this.props.navigation;
    rawScore = rawScore.filter(function (item) {
      return item == 'Correct';
    });
    score = rawScore.length;
    isFinishTest = true; // switch page here ****************************************************************************** alert score
    Alert.alert('Your Score: ' + score.toString() + ' Points');
    navigate('Home');
  }
}
