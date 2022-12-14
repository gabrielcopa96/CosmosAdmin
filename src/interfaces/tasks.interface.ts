import { ObjectId } from "mongoose";

export interface TasksModel {
  name: string;
  priority: "low" | "medium" | "high";
  comments: ObjectId[];
  pm: ObjectId;
  status: "unrealized" | "inprogress" | "completed";
  users: ObjectId[];
  incidences: ObjectId[];
}

// pm -> project manager
// users -> conjunto de usuarios, a los cuales se les asignan estas tareas, ['user1', 'user2']
// tasks -> tarea principal, esta tarea principal, puede tener sub tareas
// incidences -> estas sub tareas pueden pertenecer a 1 tarea

