export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export interface TodoFormProps {
  onAddTodo: (text: string) => void
}

export interface TodoListProps {
  todos: Todo[]
  onToggleTodo: (id: number) => void
  onDeleteTodo: (id: number) => void
}

export interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export interface HeaderProps {
  totalCount: number
  completedCount: number
}
