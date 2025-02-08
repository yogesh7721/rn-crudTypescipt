

import express from "express"
import { addTodo, deleteTodo, getTodo, updateTodo } from "../controller/todo.Controller"

const router = express.Router()

router
    .get("/get-Todo", getTodo)
    .post("/add-Todo", addTodo)
    .put("/update-Todo/:id", updateTodo)
    .delete("/delete-Todo/:id", deleteTodo)

export default router;