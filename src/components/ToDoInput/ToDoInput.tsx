import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IToDoInputProps} from '../../types/ToDoInterface';

const ToDoInput: React.FC<IToDoInputProps> = ({onAddToDo}) => {
  const [text, setText] = useState<string>('');

  const handleAddTodo = () => {
    if (text.trim()) onAddToDo(text.trim());
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add a new todo"
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addTodoBtn}>
        <Text style={styles.addTodoBtnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDoInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  addTodoBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
