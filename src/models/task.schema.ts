import { Schema, Types, model } from 'mongoose';

import { TasksModel } from '../interfaces/tasks.interface';

// creo mi schema con el cual va a tener que cumplir mi base de datos de mongo
const taskSchema = new Schema<TasksModel>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [
        true,
        "priority is required, can be only low, medium and high",
      ],
      default: "low",
    },
    comments: {
      type: [Types.ObjectId],
      ref: "Comment",
    },
    pm: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "pm is required"],
    },
    status: {
      type: String,
      enum: ["unrealized", "inprogress", "completed"],
      default: "unrealized",
      required: [true, "status is required"],
    },
    members: {
      type: [Types.ObjectId],
      ref: "User",
      required: [true, "users is required"],
    },
    incidences: {
      type: [Types.ObjectId],
      ref: "Incidence",
    },
  },
  {
    versionKey: false,
  }
);

// pensar si podemos usar un middleware pre, para comprobar
// cosas antes de hacer la creacion o una actualizacion

const TaskModel = model('Task', taskSchema);
export default TaskModel;