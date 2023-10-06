import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const TodoListScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
    { id: '1', title: 'Gå till affären' },
    { id: '2', title: 'Läsa en bok' },
    { id: '3', title: 'Träna' },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Lägg till uppgift"
          onPress={() => navigation.navigate('AddTodo')}
        />
      ),
    });
  }, [navigation]);

  const addTodo = (text) => {
    if (text.trim() === '') {
      return;
    }
    const newTodo = { id: Math.random().toString(), title: text };
    setTodos([...todos, newTodo]);
    console.log('Uppdaterad todos:', todos);
  
    navigation.navigate('TodoList');
  };
  
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TodoListScreen;
