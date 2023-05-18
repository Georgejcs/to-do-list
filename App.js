import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Heading from './src/components/Heading';
import ListedItems from './src/components/ListedItems';
import AddItems from './src/components/AddItems';

export default function App() {

  const [list, setList] = useState([
    { text: "comprar café", key: '1'},
    { text: "criar um app", key: '2'},
    { text: "jogar video game", key: '3'},
  ]);

  const touchableItem = (Key) => {
    setList(
      (prevList) => {
        return prevList.filter(text => text.key != Key);
      }
    )
  }

  const submitInformation = (text) => {
    setList((prevList) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevList
      ];
    }
    )
  }

  return (

    <View style={styles.container}>
      
      <Heading />

      <View style={styles.content}>

        <AddItems role={submitInformation} />

        <View style={styles.styleList}>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <ListedItems props={item} role={touchableItem} />
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
  },
  content: {
    padding: 40,
  }

});
