import { type TabState, type Todo } from "../../App"

interface FooterProps {
  todos: Todo[];
  currentTab: TabState;
}

export default function footer({ todos }: FooterProps) {
  return (
    <div className="bg-green-200 flex items-center justify-between">
      <p>{todos.filter((todo) => !todo.completed).length} left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      {todos.some((todo) => todo.completed) && <button>Clear completed</button>}
    </div>
  )
}
