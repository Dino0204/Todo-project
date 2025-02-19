import { useState } from "react"
import TodoList from "./components/TodoList"
export interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

export type TabState = "All" | "Active" | "Completed";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", content: "Learn Ts", completed: false },
    { id: "2", content: "Learn Vite", completed: false },
    { id: "3", content: "Learn React", completed: true },
  ]);

  const [currentTab, setCurrentTab] = useState<TabState>("All");
  return (
    <div className="bg-white p-4 rounded-2xl">
      <h1 className="font-extrabold text-slate-900">Block Todo!</h1>
      <TodoList todos={todos} currentTab={currentTab} />
    </div>
  )
}

