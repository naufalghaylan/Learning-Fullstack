type TToDo = {
    id: number,
    title: string,
    isDone?: boolean
}

const toDoData: TToDo[] = [
    {
        id: 1,
        title: 'Learn TypeScript',
        isDone: true
    },
    {
        id: 2,
        title: 'Learn React',
        isDone: true
    },
    {
        id: 3,
        title: 'Learn CSS Frameworks',
        isDone: false
    },
    {
        id: 4,
        title: 'Build a ToDo App',
        isDone: false
    }
]
export type { TToDo }
export default toDoData