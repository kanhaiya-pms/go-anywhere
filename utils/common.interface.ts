import mongoose from "mongoose";
import { ERole } from "src/users/schema/users.schema";

export interface IAuth {
    sub: mongoose.Types.ObjectId
    email: string
    role: ERole
}