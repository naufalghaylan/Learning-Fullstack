import express, { Request, Response } from 'express';
import todosData from "./data/todos.json";
const todos: ITodo[] = todosData as ITodo[];
import ITodo from "./model/todo.model";
import fs from "fs/promises";

const PORT = 8000;

const app = express();

const todosPath = "./src/data/todos.json";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! Tessss');
});

app.get("/random", (req: Request, res: Response) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.send(`Random number: ${randomNumber}`);
});

app.get("/todos", (_req: Request, res: Response) => {
    res.send(todos);
});

app.get("/todos/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
        return res.status(400).send({ message: "Invalid id format" });
    }
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        res.send({message: `Found todo with id:${id}`, todo});
    } else {
        res.status(404).send({ message: `Todo with id:${id} not found` });
    }
});

app.post("/todos", async (req: Request, res: Response) => {
    const { title, completed = false } = req.body;
    if (!title || typeof title !== "string") {
        return res.status(400).send({ message: "Title is required and must be a string" });
    }

    // Generate unique id
    const maxId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) : 0;
    const newTodo: ITodo = {
        id: maxId + 1,
        title,
        completed,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    try {
        await fs.writeFile(todosPath, JSON.stringify([...todos, newTodo], null, 2));
        res.status(201).send({ message: "Todo created successfully", newTodo });
    } catch (error) {
        res.status(500).send({ message: "Failed to create todo", error });
    }


});

app.put("/todos/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
        return res.status(400).send({ message: "Invalid id format" });
    }
    const { title, completed } = req.body;
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex === -1) {
        return res.status(404).send({ message: `Todo with id:${id} not found` });
    }

    if (todoIndex === -1 || !todos[todoIndex]) {
        return res.status(404).send({ message: `Todo with id:${id} not found` });
    }

    const updatedTodo: ITodo = {
        id: todos[todoIndex]!.id,
        title: title || todos[todoIndex]!.title,
        completed: completed !== undefined ? completed : todos[todoIndex]!.completed,
        createdAt: todos[todoIndex]!.createdAt,
        updatedAt: new Date().toISOString()
    };

    try {
        todos[todoIndex] = updatedTodo;
        await fs.writeFile(todosPath, JSON.stringify(todos, null, 2));
        res.send({ message: "Todo updated successfully", todo: updatedTodo });
    } catch (error) {
        res.status(500).send({ message: "Failed to update todo", error });
    }
});

app.delete("/todos/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    if (isNaN(id)) {
        return res.status(400).send({ message: "Invalid id format" });
    }
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex === -1) {
        return res.status(404).send({ message: `Todo with id:${id} not found` });
    }
    todos.splice(todoIndex, 1);
    try {
        await fs.writeFile(todosPath, JSON.stringify(todos, null, 2));
        res.send({ message: `Todo with id:${id} deleted successfully` });
    } catch (error) {
        res.status(500).send({ message: "Failed to delete todo", error });
    }
}); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});