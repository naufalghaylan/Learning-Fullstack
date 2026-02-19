import { useState } from 'react'

import './index.css'
import { Card, CardContent, CardFooter } from './components/ui/card'
import { ScrollArea } from './components/ui/scroll-area'
import toDoData from "./data/todo.data";
import TodoItem from "./components/TodoItem"
import { InputGroup, InputGroupAddon, InputGroupInput } from './components/ui/input-group';
import { PlusCircle } from 'lucide-react';
import { Separator } from './components/ui/separator';
import { Button } from './components/ui/button';



export type TToDo = {
  id: number
  title: string
  isDone: boolean
}



function App() {
  const [todos, setTodos] = useState<TToDo[]>(toDoData.map(todo => ({ ...todo, isDone: todo.isDone ?? false })))

const toggleTodo = (id: number) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id
        ? { ...todo, isDone: !todo.isDone }
        : todo
    )
  )
}


const [newTodo, setNewTodo] = useState("")

const addTodo = () => {
  if (!newTodo.trim()) return

  const newItem: TToDo = {
    id: Date.now(),
    title: newTodo,
    isDone: false
  }

  setTodos(prev => [...prev, newItem])

  setNewTodo("")
}

const [filter, setFilter] = useState<"all" | "active" | "completed">("all")


const deleteTodo = (id: number) => {
  setTodos(prev => prev.filter(todo => todo.id !== id))
}
const filteredTodos = todos.filter(todo => {
  if (filter === "active") return !todo.isDone
  if (filter === "completed") return todo.isDone
  return true
})
const filters = ["all", "active", "completed"] as const
const activeCount = todos.filter(todo => !todo.isDone).length
const clearCompleted = () => {
  setTodos(prev => prev.filter(todo => !todo.isDone))
}
const completedCount = todos.filter(todo => todo.isDone).length





  return (
    <>
    	<div className="relative flex h-48 md:h-72 items-center justify-center bg-[url(https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg)] bg-cover">
        <div className="absolute inset-0 bg-purple-400/50"></div>
      </div>

      <section className="relative -mt-32 mx-auto w-full max-w-md md:max-w-lg px-4 flex flex-col gap-6">

        <h1 className="relative z-10 text-4xl text-white font-bold tracking-[.35em]">
          T O D O
        </h1>
        <InputGroup className="w-full bg-white h-12">
          <InputGroupInput
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo()
            }}
            placeholder="Create a new todo"
          />
          <InputGroupAddon onClick={addTodo} className="cursor-pointer">
            <PlusCircle size={20} className="hover:scale-120 transition-transform duration-200" />
          </InputGroupAddon>
        </InputGroup>

        <Card className="py-0 overflow-hidden gap-0">
          <CardContent  className="px-1.5 py-1.5 pb-0 pt-1.5">
            <ScrollArea className="h-72 md:h-80">
              <div>
                {filteredTodos.length > 0 ? (
                  filteredTodos.map(todo => (
                    <TodoItem
                      key={todo.id}
                      id={todo.id}
                      title={todo.title}
                      isDone={todo.isDone}
                      onToggle={toggleTodo}
                      onDelete={deleteTodo}
                    />
                  ))
                ) : (
                  <div className="text-center text-sm text-gray-400 py-6">
                    No tasks found
                  </div>
                )}

              </div>

            </ScrollArea>
          </CardContent>
        </Card>
        <Separator/>
        <CardFooter className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <span className="text-sm text-gray-400">
            {activeCount} item{activeCount !== 1 && "s"} left
          </span>

          <div className="flex justify-center gap-2">

            {filters.map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => setFilter(item)}
                className={
                  filter === item
                    ? "text-purple-600 font-semibold"
                    : "text-gray-400"
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Button>
            ))}
          </div>

          {completedCount > 0 && (
            <Button
              variant="ghost"
              onClick={clearCompleted}
              className="text-gray-400 hover:text-red-500"
            >
              Clear Completed
            </Button>
          )}

          {/* Clear completed akan kita isi nanti */}
        </CardFooter>


      </section>
    </>
  )
}

export default App
