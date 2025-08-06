'use client'

import { useState } from 'react'
import { TodoItemProps } from '@/types/todo'

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    // Add a small delay for better UX
    setTimeout(() => {
      onDelete(todo.id)
    }, 150)
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div 
      className={`todo-item group ${
        todo.completed ? 'todo-completed' : ''
      } ${
        isDeleting ? 'opacity-50 scale-95' : ''
      } transition-all duration-200`}
    >
      <div className="flex items-start space-x-3">
        {/* Checkbox */}
        <div className="flex-shrink-0 pt-1">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
              todo.completed 
                ? 'bg-green-500 border-green-500' 
                : 'border-gray-300 hover:border-primary-400'
            }`}>
              {todo.completed && (
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
          </label>
        </div>

        {/* Todo Content */}
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium transition-all duration-200 ${
            todo.completed 
              ? 'text-gray-500 text-strikethrough' 
              : 'text-gray-900'
          }`}>
            {todo.text}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Created {formatDate(todo.createdAt)}
          </p>
        </div>

        {/* Delete Button */}
        <div className="flex-shrink-0">
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 text-gray-400 hover:text-red-500 focus:outline-none focus:text-red-500 disabled:opacity-50"
            title="Delete todo"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
