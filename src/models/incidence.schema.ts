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
      minlength: [10, "description min length is 10 characters"],
    },
    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
      required: [true, "status is required"],
    },
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: [true, "user is required"],
    },
    time: {
        type: Number,
    }
  },
  {
    versionKey: false,
  }
);

const IncidenceModel = model('Incidence', incidenceSchema);
export default IncidenceModel;


