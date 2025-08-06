'use client'

import { useState } from 'react'
import TodoForm from '@/components/TodoForm'
import TodoList from '@/components/TodoList'
import Header from '@/components/Header'
import { Todo } from '@/types/todo'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [nextId, setNextId] = useState(1)

  const addTodo = (text: string) => {
    if (text.trim() === '') return
    
    const newTodo: Todo = {
      id: nextId,
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    
    setTodos(prev => [...prev, newTodo])
    setNextId(prev => prev + 1)
  }

  const toggleTodo = (id: number) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Header 
        totalCount={totalCount} 
        completedCount={completedCount} 
      />
      
      <div className="space-y-6">
        <TodoForm onAddTodo={addTodo} />
        <TodoList 
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
