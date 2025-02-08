
import mongoose from "mongoose";
import express, { Request, Response } from 'express'
import cors from "cors"
import { Callback } from "mongoose"

import todoRoutes from "./routes/todo.routes"


require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({ origin: "*", credentials: true }))
app.use('/api/todos', todoRoutes);
// app.use("/api/todos", require("./routes/todo.routes"))

app.use("*", (req: Request, res: Response) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err: Error, req: Request, res: Response, next: Callback) => {
    res.status(500).json({ message: "Server Error", error: err?.message })
})

mongoose.connect(process.env.MONGO_URL as string)

mongoose.connection.once("open", () => {
    console.log("Mongo Connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server Running  🏃‍♀️😊`);
    })

})

