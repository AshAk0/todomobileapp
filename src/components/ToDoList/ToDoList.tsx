import {ScrollView, StyleSheet} from 'react-native';
import {ITodoListProps} from '../../types/ToDoInterface';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList: React.FC<ITodoListProps> = ({
  todoList,
  onDeleteTodo,
  onToggleTodo,
  onEditTodo,
}) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <ToDoItem
          key={todo?.id}
          todo={todo}
          onDelete={() => onDeleteTodo(todo?.id)}
          onToggle={() => onToggleTodo(todo?.id)}
          onEdit={(newText: string) => onEditTodo(todo?.id, newText)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ToDoList;
