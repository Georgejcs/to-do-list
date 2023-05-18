import React, {useState} from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



export default function AddItems({ role }) {

    const [text, setText] = useState('');

    const changes = (val) => {
        setText(val);
    }

    return(
       <View style={styles.heading}>

        <TextInput 
            style={styles.input}
            placeholder="Novo item..."
            onChangeText={changes}
        />
       
       <Button
        onPress={() => role(text)}
        title="Adicionar item"
        color='coral'
       />

       </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});