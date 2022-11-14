import { Schema, Types, model } from "mongoose";

import { IncidencesModel } from "../interfaces/incidences.interface";

const incidenceSchema = new Schema<IncidencesModel>(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
      maxlength: [500, "description max length is 500 characters"],
      minlength: [6, "description min length is 6 characters"],
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
      required: [true, "status is required"],
    },
    task: {
      type: Types.ObjectId,
      ref: "Task",
      required: [true, "task is required"],
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "user is required"],
    }
  },
  {
    versionKey: false,
  }
);

const IncidenceModel = model('Incidence', incidenceSchema);
export default IncidenceModel;


