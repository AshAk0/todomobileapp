export interface IToDoInputProps {
  onAddToDo: (text: string) => void;
}

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface ITodoListProps {
  todoList: ITodo[];
  onDeleteTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
  onEditTodo: (id: string, newText: string) => void;
}

export interface ITodoItemProps {
  todo: ITodo;
  onDelete: () => void;
  onToggle: () => void;
  onEdit: (newText: string) => void;
}

export interface IToDoEditProps {
  todo: ITodo;
  onSave: (newText: string) => void;
  onCancel: () => void;
}
