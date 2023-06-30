import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

//firebase
import app from './firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login';
import List from './pages/List';
import NewTransaction from './pages/NewTransaction';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{ header: () =>  null }}/>
        <Stack.Screen name='List' component={List} />
        <Stack.Screen name='NewTransaction' component={NewTransaction} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#433576',
    alignItems: 'center',
    paddingTop: 110
  },
  button: {
    backgroundColor: "#00D8FF",
    width: 156,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  divInput: {
    gap: 25,
    alignItems: 'center',
  }
});
