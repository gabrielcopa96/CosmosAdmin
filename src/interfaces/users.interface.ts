import { ObjectId } from "mongoose";

export interface UsersModel {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  image: string;
  projects: ObjectId[];
  refreshToken: any;
}

export interface UsersModelOutPut extends UsersModel {
  _id: ObjectId;
}

export interface OutPutResponseRegister {
  ok: boolean;
  msg: string;
  data: UsersModelOutPut;
}