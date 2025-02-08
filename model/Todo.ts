
import mongoose, { Schema } from "mongoose"
import { Todo } from "../type/Todo.interface"

const todoSchema: Schema = new mongoose.Schema<Todo>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    gender: { type: String, required: true },
    select: { type: String, required: true },
})

const Todo = mongoose.model("todo", todoSchema)
export default Todo
