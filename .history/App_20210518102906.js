
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import TodoItem from './components/TodoItem'

export default function App() {

  let [todos, setTodos] = useState( [
    { text: 'buy coffeeo', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ] )
  
  return (
    <View style={styles.container}>
      <Header />
      <View style={ styles.content }>
        {/*to form */}
        <View style={ styles.list }>
          <FlatList
            data={ todos }
            renderItem={( { item } ) => (
              <TodoItem item={ item }/>
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
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
