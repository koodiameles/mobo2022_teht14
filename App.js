import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, FlatList} from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText ] = useState("");

  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.assignmentHeaderText}>TEHT 14 Teksti puheeksi</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={setText} value={text}/>
        <Button title="Press to hear text" onPress={speak} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'black',
  },
  containerHeader: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  shoppingList: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    margin: 10
  },
  input : {
    width:"80%", 
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5,
    color:"white",
  },
  assignmentHeaderText: {
    fontSize: 40,
    color:"#6495ED",
  }
});
