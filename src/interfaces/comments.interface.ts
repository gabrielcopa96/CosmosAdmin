import { ObjectId } from "mongoose";

export interface CommentsModel {
    user: ObjectId;
    content: string;
    created_at: Date;
}