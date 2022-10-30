import { Schema, Types, model } from 'mongoose';

import { BacklogModel } from '../interfaces/backlog.interface'

const backlogSchema = new Schema<BacklogModel>(
  {
    title: {
      type: String,
      required: [true, "title is required"]
    },
    sprint: {
      type: [Types.ObjectId],
      ref: "Sprint",
      default: [],
    },
    incidences: {
      type: [Types.ObjectId],
      ref: "Incidences",
      default: [],
    },
    created_at: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const BacklogModel = model('Backlog', backlogSchema);
export default BacklogModel;