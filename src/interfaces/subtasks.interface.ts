import { ObjectId } from "mongoose";

export interface SubTasksModel {
    name: string;
    description: string;
    priority: 'low' | 'medium' | 'high';
    comments: ObjectId[];
    user: ObjectId;
    status: 'unrealized' | 'inprogress' | 'completed';
    task: ObjectId;
}