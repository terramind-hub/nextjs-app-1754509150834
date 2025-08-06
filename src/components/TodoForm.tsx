'use client'

import { useState } from 'react'
import { TodoFormProps } from '@/types/todo'

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [inputValue, setInputValue] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (inputValue.trim() === '') {
      return
    }

    setIsSubmitting(true)
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      onAddTodo(inputValue)
      setInputValue('')
      setIsSubmitting(false)
    }, 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as any)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="todo-input" className="block text-sm font-medium text-gray-700 mb-2">
            Add a new todo
          </label>
          <div className="flex space-x-3">
            <input
              id="todo-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What needs to be done?"
              className="input-field flex-1"
              disabled={isSubmitting}
              maxLength={200}
            />
            <button
              type="submit"
              disabled={isSubmitting || inputValue.trim() === ''}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[80px] flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Add'
              )}
            </button>
          </div>
          {inputValue.length > 0 && (
            <p className="text-xs text-gray-500 mt-1">
              {inputValue.length}/200 characters
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
