import { ObjectId } from "mongoose";

export interface BacklogsModel {
    title: string;
    sprints: ObjectId[];
    incidences: ObjectId[];
    created_at: Date;
    owner: ObjectId;
}

export interface BacklogsModeloInput extends BacklogsModel {
    id_project?: ObjectId | string;
}