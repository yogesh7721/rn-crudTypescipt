

import { Document } from "mongoose";

export interface Todo extends Document {
    name: string,
    email: string,
    mobile: number,
    gender: string,
    select: string,
}