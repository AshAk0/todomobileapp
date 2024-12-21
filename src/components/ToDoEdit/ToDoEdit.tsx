import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IToDoEditProps} from '../../types/ToDoInterface';

const ToDoEdit: React.FC<IToDoEditProps> = ({todo, onSave, onCancel}) => {
  const [text, setText] = useState<string>(todo.text);

  const handleSave = () => {
    if (text.trim()) onSave(text.trim());
  };

  return (
    <View style={styles.container}>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style={styles.cancelBtn}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    flex: 1,
    borderColor: '#cccccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  saveBtn: {
    backgroundColor: '#4cd964',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  cancelBtn: {
    backgroundColor: '#ff9500',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default ToDoEdit;
