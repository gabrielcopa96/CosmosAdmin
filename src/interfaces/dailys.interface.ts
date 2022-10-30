import { ObjectId } from "mongoose";

export interface DailysModel {
  sprint: ObjectId;
  members: ObjectId[];
  owner: ObjectId;
  status: 'active' | 'inactive' | 'pending';
  created: Date;
  start: Date;
  end: Date;
  urlCall: String;
}