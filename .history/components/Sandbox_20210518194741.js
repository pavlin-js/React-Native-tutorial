import { FlatList, StyleSheet, Text, View } from "react-native";
import React from 'react'

const Sandbox = () => {
  return (
    <View style={ styles.container } >
      <Text style={ styles.boxOne }>One</Text>
      <Text style={ styles.boxOne }>Two</Text>
      <Text style={ styles.boxOne }</Text>
      <Text style={ styles.boxOne }>One</Text>
    </View>
  );
}

let styles =StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#333'
  }
})
 
export default Sandbox;