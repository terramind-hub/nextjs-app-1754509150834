import { TodoListProps } from '@/types/todo'
import TodoItem from './TodoItem'

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No todos yet</h3>
          <p className="text-gray-500">Add your first todo above to get started!</p>
        </div>
      </div>
    )
  }

  // Separate completed and incomplete todos
  const incompleteTodos = todos.filter(todo => !todo.completed)
  const completedTodos = todos.filter(todo => todo.completed)

  return (
    <div className="space-y-6">
      {/* Incomplete Todos */}
      {incompleteTodos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Active ({incompleteTodos.length})
          </h2>
          <div className="space-y-3">
            {incompleteTodos.map((todo) => (
              <div key={todo.id} className="animate-slide-in">
                <TodoItem
                  todo={todo}
                  onToggle={onToggleTodo}
                  onDelete={onDeleteTodo}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Completed Todos */}
      {completedTodos.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Completed ({completedTodos.length})
          </h2>
          <div className="space-y-3">
            {completedTodos.map((todo) => (
              <div key={todo.id} className="animate-fade-in">
                <TodoItem
                  todo={todo}
                  onToggle={onToggleTodo}
                  onDelete={onDeleteTodo}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
