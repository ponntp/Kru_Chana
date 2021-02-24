import * as React from 'react';
import {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {FilledButton} from '../components/FilledButton';
import {AuthContext} from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';
const list = [];
  const loopdata = (user) => {
    list.map(each => {
      console.log('each email: ', each.Email)
      console.log('user email: ', user.email)
      console.log('each teacher: ', each.Teacher)
      if(each.Email == user.email && each.Teacher) { 
        alert("You are teacher")
      }
    })};


export default function homeScreen({navigation}) {
  const {user, logout} = useContext(AuthContext);
  const [Email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);
  


  

  useEffect(() => {
    const fetchData = async() => {
      try {
    
        await firestore()
        .collection('Users')
        .get()
        .then((querySnapshot) => {
          // console.log('Total Users: ',querySnapshot.size)
          querySnapshot.forEach(doc => {
            const {Email, Teacher} = doc.data();
            list.push({
              id: doc.id,
              Email,
              Teacher
            }      
            );
          })
        })

        setEmail(list);
        if(loading) {
          setLoading(false);
        }
        
      } catch (e) {
          console.log(e)
      }
    }
    
    fetchData();
  }, [])



  return (
    <View style={styles.container}>
      <Text>Welcome Teacher {user.email}</Text>
      <FilledButton
        title={'Create Exam'}
        style={styles.loginButton}
        onPress={() => navigation.navigate('MakeSubject')}
      />
      <FilledButton
        title={'Show Data'}
        style={styles.loginButton}
        onPress={() => loopdata(user)}
      />
      <FilledButton
        title={'Student Score'}
        style={styles.loginButton}
        onPress={() => navigation.navigate('Taketest')}
      />
      <FilledButton
        title={'Logout'}
        style={styles.loginButton}
        onPress={() => logout()}
      />
    </View>
  );
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
    marginBottom: 100,
  },
});
