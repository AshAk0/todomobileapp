import {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ITodoItemProps} from '../../types/ToDoInterface';
import ToDoEdit from '../ToDoEdit/ToDoEdit';

const ToDoItem: React.FC<ITodoItemProps> = ({
  todo,
  onDelete,
  onToggle,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = (newText: string) => {
    onEdit(newText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <ToDoEdit
        todo={todo}
        onSave={handleEdit}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.todoText}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={() => setIsEditing(true)}
          style={[styles.editBtn, todo?.completed && styles.disabledEdit]}
          disabled={todo?.completed}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteBtn}>
          <Text style={styles.btnText}>Delete</Text>
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
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  editBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  disabledEdit: {
    backgroundColor: '#cccccc',
  },
  deleteBtn: {
    backgroundColor: '#ff3b30',
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

export default ToDoItem;
