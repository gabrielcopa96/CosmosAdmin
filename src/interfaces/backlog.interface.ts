import { ObjectId } from "mongoose";

export interface BacklogsModel {
    title: string;
    sprints: ObjectId[];
    incidences: ObjectId[];
    created_at: Date;
    owner: ObjectId;
}