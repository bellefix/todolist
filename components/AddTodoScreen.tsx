import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodoScreen = ({ navigation }) => {
  const [text, setText] = useState('');

  const addTodo = () => {
    console.log('Lägg till uppgift klickad');
    // Nästa fokus, knappen vill ej funka än
  };  

  return (
    <View>
      <TextInput
        placeholder="Skriv en ny uppgift"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Lägg till" onPress={addTodo} />
    </View>
  );
};

export default AddTodoScreen;
