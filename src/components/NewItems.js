import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function NewItems({props, role}) {
    return(
        <TouchableOpacity onPress={() => role(props.key)}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    } 
});