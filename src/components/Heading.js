import React from "react"
import { StyleSheet, Text, View} from "react-native";




export default function Heading() {
    return (
    <View style={styles.heading}>
    <Text style={styles.title}> Itens</Text>
    </View>
    );
}




const styles = StyleSheet.create({
heading: {
height: 80,
paddingTop:38,
backgroundColor:'coral'
},

title: {
textAlign: 'center',
color: "#fff",
fontSize: 20,
fontWeight: 'bold',
},

});