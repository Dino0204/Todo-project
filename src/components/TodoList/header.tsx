import { FaCheck } from "react-icons/fa"

export default function Header() {
  return (
    <div className="bg-red-200 flex items-center justify-between">
      <button><FaCheck /></button>
      <input type="text" className="bg-white" />
    </div>
  )
}
