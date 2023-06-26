import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../assets/React-icon.svg.png';
import CustomInput from '../components/CustomInput';

//firebase
import app from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth(app);
  const navigation = useNavigation();

  useEffect(() => {
    console.log(auth.currentUser)
    if(auth.currentUser) {
        navigation.navigate('List')
    }
  }, [auth.currentUser])
  
  const setEmailInputValue = (value) => {
    setEmail(value);
  }
  const setPasswordInputValue = (value) => {
    setPassword(value);
  }

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
    }).catch((err) => {
      console.error(err);
    })
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      }).catch((err) => {
        console.error(err);
      })
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100,
          marginBottom: 25,
          resizeMode: 'contain',
        }}
      />

      <View style={styles.divInput}>
        <CustomInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmailInputValue}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          onChangeText={setPasswordInputValue}
          isPassword
        />

        <TouchableOpacity onPress={signIn}>
          <View style={styles.button}>
            <Text style={{ color: '#302850', fontSize: 16 }}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
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
