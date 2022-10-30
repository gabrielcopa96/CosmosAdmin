import { Schema, Types, model } from 'mongoose';

import { SprintsModel } from '../interfaces/sprints.interface'

const sprintSchema = new Schema<SprintsModel>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    tasks: {
      type: [Types.ObjectId],
      ref: "Task",
      default: [],
    },
    status: {
      type: String,
      enum: ["active", "completed", "standby"],
      default: "standby",
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    }
  },
  {
    versionKey: false,
  }
);

const SprintModel = model('Sprint', sprintSchema);
export default SprintModel;