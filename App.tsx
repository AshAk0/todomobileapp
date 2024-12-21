import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ToDoInput from './src/components/ToDoInput/ToDoInput';
import ToDoList from './src/components/ToDoList/ToDoList';
import {ITodo} from './src/types/ToDoInterface';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const addToDo = (text: string) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === id
          ? {
              ...item,
              text: newText,
            }
          : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>TODO APP</Text>
      <ToDoInput onAddToDo={addToDo} />
      <ToDoList
        todoList={todoList}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
        onEditTodo={editTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default App;
