import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Heading from './src/components/Heading';
import NewItems from './src/components/NewItems';

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



  return (

    <View style={styles.container}>
      
      <Heading />

      <View style={styles.content}>
        <View>
          <FlatList
            data={list}
            renderItem={({ item }) => (
              <NewItems props={item} role={touchableItem} />
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
