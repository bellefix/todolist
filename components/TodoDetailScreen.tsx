import React from 'react';
import { View, Text } from 'react-native';

const TodoDetailScreen = ({ route }) => {
  const { item } = route.params; // Uppgiften från navigationsparam.

  return (
    <View>
      <Text>Detaljer om uppgift:</Text>
      <Text>ID: {item.id}</Text>
      <Text>Titel: {item.title}</Text>
      {/* Möjligen fler detaljer att lägga till */}
    </View>
  );
};

export default TodoDetailScreen;
