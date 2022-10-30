import { ObjectId } from "mongoose";

export interface UsersModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  image: string;
  projects: ObjectId[];
}