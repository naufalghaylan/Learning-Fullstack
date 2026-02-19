type TodoItemProps = {
  id: number
  title: string
  isDone: boolean
  onToggle: (id: number) => void
  onDelete: (id: number) => void

}

function TodoItem({ id, title, isDone, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="group flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => onToggle(id)}
        />
        <span className={isDone ? "line-through text-gray-400" : ""}>
          {title}
        </span>
      </div>

      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 transition"
      >
        X
      </button>
    </div>

  )
}

export default TodoItem
