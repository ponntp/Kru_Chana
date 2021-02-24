import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useContext, useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {AuthContext} from '../navigaiton/AuthProvider';
import firestore from '@react-native-firebase/firestore';

import HomeTeacher from '../screens/homeScreenTeacher';
import MakeQuestion from '../screens/makeQuestionScreen';
import HomeStudent from '../screens/homeScreenStudent';

const Stack = createStackNavigator();
var teacher = null;
const list = [];
const loopdata = (user) => {
  list.map((each) => {
    if (each.Email == user.email && each.Teacher) {
      teacher = true;
    } else if (each.Email == user.email && !each.Teacher) {
      teacher = false;
    }
  });
};

export default function checkRoleScreen() {
  const {user} = useContext(AuthContext);
  const [Email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await firestore()
          .collection('Users')
          .get()
          .then((querySnapshot) => {
            // console.log('Total Users: ',querySnapshot.size)
            querySnapshot.forEach((doc) => {
              const {Email, Teacher} = doc.data();
              list.push({
                id: doc.id,
                Email,
                Teacher,
              });
            });
          });

        setEmail(list);
        if (loading) {
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, []);

  loopdata(user);

  return teacher ? (
    <> 
      <Stack.Navigator initialRouteName="HomeTeacher">
        <Stack.Screen name="HomeTeacher" component={HomeTeacher} />
        <Stack.Screen name="MakeQuestion" component={MakeQuestion} />
      </Stack.Navigator>
    </>
  ) : (
    <>
      <Stack.Navigator initialRouteName="HomeStudent">
        <Stack.Screen name="HomeStudent" component={HomeStudent} />
      </Stack.Navigator>
    </>
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

// function AppCheck() {
//   return (
//     <Stack.Navigator initialRouteName="Check">
//       <Stack.Screen name="Check" component={Check} />
//     </Stack.Navigator>
//   );
// }

// export default AppCheck;
