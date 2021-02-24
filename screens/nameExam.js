import * as React from 'react';
import { useContext, Component} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import { AuthContext } from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { Input, ListItem } from 'react-native-elements';

class ShowData extends Component { 
  constructor() {
    super();

    this.fireStoreData = firestore().collection("Users");
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
      const {Name, Score} = res.data();
      userArr.push({
        key: res.id,
        res,
        Name,
        Score
      })
    })
    this.setState({
      userArr
    })
  }
  render(){
    return(
      <View>
        <Text> Hi Test pull data </Text>
        {
          this.state.userArr.map((item, i) => {
            return (
                <ListItem
                  key={i}
                  bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{item.Name}</ListItem.Title>
                      <Button title={item.Name}/>
                    </ListItem.Content>

                </ListItem>
            );
          })
        }
      </View>
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


  export default ShowData;