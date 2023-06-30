import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function List() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async() => {
      try {
        const response = await axios.get('http://localhost:3000');
        if (response.status === 200) {
          setTransactions(response.data);
        }
      } catch (err) {
        console.log(err);
      } 
    }

    getTransactions();
  }, [])

  const navigation = useNavigation();

  const OnHandleNewTransactionButton = () => {
    navigation.navigate('NewTransaction')
  }

  return (
    <View>
      <Text>List</Text>
      { transactions.map((transaction, index) => {
        return (
          <View>
            <Text>{ transaction.reference }</Text>
            <Text>{ transaction.amount }</Text>
            <Text>{ transaction.date }</Text>
          </View>
        )
      }) }
      
      <TouchableOpacity onPress={OnHandleNewTransactionButton}>
          <View style={styles.button}>
            <Text style={{ color: '#302850', fontSize: 16 }}>New Transaction</Text>
          </View>
        </TouchableOpacity>
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
