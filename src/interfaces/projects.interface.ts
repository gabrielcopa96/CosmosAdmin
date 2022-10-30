import { ObjectId } from "mongoose";

export interface ProjectsModel {
    name: string;
    description: string;
    owner: ObjectId;
    members: ObjectId[];
    images: string[];
    backlogs: ObjectId[];
    sprints: ObjectId[];
    dailys: ObjectId[];
}