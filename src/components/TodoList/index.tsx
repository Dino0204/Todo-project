import { type TabState, type Todo } from "../../App"
import Header from "./header";
import Footer from "./footer";
import TodoItem from "./todoItem";

interface TodoProps {
  todos: Todo[];
  currentTab: TabState;
}

export default function TodoList({ todos, currentTab }: TodoProps) {
  return (
    <>
      <Header />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Footer todos={todos} currentTab={currentTab} />
    </>
  )
}
