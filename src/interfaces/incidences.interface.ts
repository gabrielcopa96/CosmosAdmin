import { ObjectId } from "mongoose";

export interface IncidencesModel {
  title: string;
  description: string;
  task: ObjectId;
  status: 'open' | 'closed'
  user: ObjectId;
}