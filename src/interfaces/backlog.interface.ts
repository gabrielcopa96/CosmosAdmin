import { ObjectId } from "mongoose";

export interface BacklogModel {
    title: string;
    sprint: ObjectId[];
    incidences: ObjectId[];
    created_at: Date;
}