import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import React, { useState } from 'react'

const AddTodo = () => {

  let [text, setText] = useState('')

  let changeHandler = ( value ) => {
    setText( value )
  }

  return (
    <View>
      <TextInput
        style = {styles.input}
        placeholder='new todo'
        onChangeText={changeHandler}
      />
    </View>
  );
}

let styles = St

export default AddTodo;