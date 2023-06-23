import { StyleSheet, TextInput, Text } from "react-native"

const CustomInput = (props) => {
    return (
        <TextInput
            style={styles.inputWrapper}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            placeholderTextColor={'#00D8FF'}
            secureTextEntry={props.isPassword}
        />
    )
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: 306,
        height: 45,
        backgroundColor: '#302450',
        borderRadius: 8,
        color: '#00D8FF',
        paddingHorizontal: 15
    }
})

export default CustomInput;