import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class ShowData extends Component { 
  constructor() {
    super();

    this.state = {
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
      const {exameName, name, score} = res.data();
      userArr.push({
        key: res.id,
        exameName,
        name,
        score
      })
    })
    this.setState({
      userArr
    })
  }
  render(){
    const {text} = this.props.route.params
    this.fireStoreData = firestore().collection("subject_Math").doc({text}.text).collection('score');
    return(
      <ScrollView style={styles.container}>
        {
          this.state.userArr.map((item, i) => {
            return (
                
                    <ListItem.Content style={styles.box}>
                      <Text style={styles.textName}>Name: {item.name}</Text>
                      <Text style={styles.textScore}>Score: {item.score}</Text>
                    </ListItem.Content>

                
            );
          })
        }
      </ScrollView>
    )
  }

}


const styles = StyleSheet.create({
  textName: {
    paddingLeft:20,
    paddingRight: 20,
    paddingTop: 20,
    fontSize: 20,
  },
  textScore: {
    paddingLeft:20,
    paddingRight: 20,
    paddingBottom: 20,
    fontSize: 20,
    padding: 20
  },

  box: {
    backgroundColor: '#00CABA',
    shadowColor: "#000000",
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    margin:50,
    width: 300,
    marginBottom:5
  },
  
  container: {
    flex: 1,
    backgroundColor: '#E2FCFA',
  },
  });


  export default ShowData;