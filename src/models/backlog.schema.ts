import { Schema, Types, model } from 'mongoose';

import { BacklogsModel } from '../interfaces/backlog.interface'

const backlogSchema = new Schema<BacklogsModel>(
  {
    title: {
      type: String,
      required: [true, "title is required"]
    },
    sprints: {
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
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "owner is required"],
    }
  },
  {
    versionKey: false,
  }
);

const BacklogModel = model('Backlog', backlogSchema);
export default BacklogModel;