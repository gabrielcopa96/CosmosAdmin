import { ObjectId } from "mongoose";

export interface IncidencesModel {
  title: string;
  description: string;
  time?: number;
  status: 'open' | 'closed'
  user: ObjectId;
}