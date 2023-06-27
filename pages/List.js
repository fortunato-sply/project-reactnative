import { Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function List() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async() => {
      try {
        const response = await axios.get('http://localhost:3000/transactions');
        if (response.status === 200) {
          setTransactions(response.data);
        }
      } catch (err) {
        console.log(err);
      } 
    }

    getTransactions();
  }, [])

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
    </View>
  );
}
