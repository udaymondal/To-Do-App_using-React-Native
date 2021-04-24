import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoitem';


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy fruits', key: '1' },
    { text: 'finish milestone-9 by 28 April', key: '2' },
    { text: 'play games', key: '3' },
    { text: 'watch movie', key: '4' }
  ]);

  const pressHandler = key => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    }else{
      Alert.alert('OOPS!', 'Please enter more than 3 chars', [
        {text: 'OK', onPress: ()=> console.log('alert closed')}
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
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
    backgroundColor: '#FEDBD0',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20,
  }
});
