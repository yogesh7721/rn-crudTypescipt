import Todo from "../model/Todo"
import { Request, Response } from "express";
const asyncHandler = require("express-async-handler")

export const getTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await Todo.find()
        res.json({ message: "Todo Fetch Success", result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Todo Fetch Faild", error })
    }
})

export const addTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, mobile, gender, select } = req.body
        await Todo.create({ name, email, mobile, gender, select });
        res.json({ message: "Add Todo Success" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Todo Add Failed" })
    }
})

export const updateTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        await Todo.findByIdAndUpdate(id, updateData);
        res.json({ message: "Update Todo Success" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Todo Update Failed" })
    }
})

export const deleteTodo = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.json({ message: "Delete Todo Success" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Todo Delete Failed" })
    }
})
