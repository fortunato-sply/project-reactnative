import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CustomInput from '../components/CustomInput';

export default function List() {
    useEffect(() => {
        // const postTransaction = async() => {
        //     try {
        //         const response = await axios.post('http://localhost:3000/post/transactions');
        //         if (response.status === 200) {
        //             setTransactions(response.data);
        //         }
        //     } catch (err) {
        //         console.log(err);
        //     } 
        // }
    }, [])

    const [ref, setReference] = useState();
    const [val, setValue] = useState();
    const [dateInput, setDate] = useState();

    const setReferenceInputValue = (value) => {
        setReference(value);
    }

    const setValueInputValue = (value) => {
        setValue(value);
    }

    const setDateInputValue = (value) => {
        setDate(value);
    }

    const createNewTransaction = async() => {
        const transaction = {
            reference: ref,
            value: parseInt(val),
            date: dateInput
        }
        console.log(transaction);
        try {
            const response = await axios.post('http://localhost:3000/add', {
             ...transaction
            }).then(res => console.log(res));

            if(response.status === 200) {
                console.log("success");
            }
        } catch(err) {
            console.log(err);
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.divInput}>
                <CustomInput
                    placeholder="Reference"
                    value={ref}
                    onChangeText={setReferenceInputValue}
                />

                <CustomInput
                    placeholder="Value"
                    value={val}
                    onChangeText={setValueInputValue}
                />

                <CustomInput
                    placeholder="Date"
                    value={dateInput}
                    onChangeText={setDateInputValue}
                />

                <TouchableOpacity onPress={createNewTransaction}>
                    <View style={styles.button}>
                        <Text style={{ color: '#302850', fontSize: 16 }}>Create</Text>
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
  