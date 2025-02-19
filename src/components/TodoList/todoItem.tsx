import { type Todo } from "../../App"
import { FaRegTrashAlt, FaRegCheckCircle, FaRegCircle } from "react-icons/fa"

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="bg-blue-200 flex items-center justify-between">
      {todo.completed ? (
        <button>
          <FaRegCheckCircle />
        </button>
      ) : (
        <button>
          <FaRegCircle />
        </button>
      )}
      <p>{todo.content}</p>
      <button>
        <FaRegTrashAlt />
      </button>
    </div>
  )
}
