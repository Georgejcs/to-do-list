import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ListedItems({props, role}) {
    return(
        <TouchableOpacity onPress={() => role(props.key)}>
            <View style={styles.post}>
                <MaterialIcons name='delete' size={18} color={'gray'} />
                <Text style={styles.textItem}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    }, 

    textItem: {
        marginLeft: 30,
    }
});