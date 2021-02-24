import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, LogBox } from 'react-native'

class makeQuestionScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            question: '',
            choice1: '',
            choice2: '',
            choice3: '',
            choice4: '',
            ans: ''
        }
        this.exams = []      
        this.btnText = 'Submit'
    }

   handleQuestion = (text) => {
      this.setState({ question: text })
      console.log(this)
   }
   handleQuiz1 = (text) => {
      this.setState({ choice1: text })
      console.log(this)
   }
   handleQuiz2 = (text) => {
      this.setState({ choice2: text })
      console.log(this)
   }
   handleQuiz3 = (text) => {
      this.setState({ choice3: text })
      console.log(this)
   }
   handleQuiz4 = (text) => {
      this.setState({ choice4: text })
      console.log(this)
   }
   handleAns = (text) => {
      this.setState({ ans: text })
      console.log(this)
      
   }

   login = () => {                     
       if(this.exams.length == 2) {
           // go to another page
       }
       console.log(this)
       if (this.state.question.length != 0 && this.state.choice1.length != 0 && this.state.choice2.length != 0 && this.state.choice3.length != 0 && this.state.choice4.length != 0 && this.state.ans.length != 0){
            this.exams.push(this.state)
            alert('aaa')
            this.setState({ question: '' })
            this.setState({ choice1: '' })
            this.setState({ choice2: '' })
            this.setState({ choice3: '' })
            this.setState({ choice4: '' })
            this.setState({ ans: '' })

            if(this.exams.length == 2) {
                this.btnText = 'DONE'
            }
            console.log(this.exams)
       }
        else alert('nope')

   }


   render() {

      return (
        
         <View style = {styles.container}>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Question"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={this.state.question}
               onChangeText = {this.handleQuestion}/>
               
            
            <Text>{"\n"}</Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Choice1"
               placeholderTextColor = "#9a73ef"
               value = {this.state.choice1}
               autoCapitalize = "none"
               onChangeText = {this.handleQuiz1}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Choice2"
               placeholderTextColor = "#9a73ef"
               value = {this.state.choice2}
               autoCapitalize = "none"
               onChangeText = {this.handleQuiz2}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Choice3"
               placeholderTextColor = "#9a73ef"
               value = {this.state.choice3}
               autoCapitalize = "none"
               onChangeText = {this.handleQuiz3}/>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Choice4"
               placeholderTextColor = "#9a73ef"
               value = {this.state.choice4}
               autoCapitalize = "none"
               onChangeText = {this.handleQuiz4}/>
            
            <Text>{"\n"}</Text>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Ans"
               placeholderTextColor = "#9a73ef"
               value = {this.state.ans}
               autoCapitalize = "none"
               onChangeText = {this.handleAns}/>



            <TouchableOpacity
               style = {styleD.submitButton}
               onPress = {
                  () => this.login()
               }>
               <Text style = {styleD.submitButtonText}> { this.btnText } </Text>
            </TouchableOpacity>
            
            
         </View>
      )
   }
}

export default makeQuestionScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 60
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },

})

const styleD = StyleSheet.create({

    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 65,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })