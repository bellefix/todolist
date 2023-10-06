import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TodoItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item.id)}>
      <View>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
