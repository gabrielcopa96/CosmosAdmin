import { Schema, Types, model } from "mongoose";

import { DailysModel } from "../interfaces/dailys.interface";

const dailySchema = new Schema<DailysModel>(
  {
    sprint: {
      type: Types.ObjectId,
      ref: "Sprint",
      required: [true, "Sprint is required"],
    },
    members: {
      type: [Types.ObjectId],
      ref: "User",
      required: [true, "Members is required"],
    },
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "PM is required"],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "active",
      required: [true, "Status is required"],
    },
    created: {
      type: Date,
      default: Date.now,
      required: [true, "Created is required"],
    },
    start: {
      type: Date,
      required: [true, "Start is required"],
      default: Date.now,
    },
    end: {
      type: Date,
      required: [true, "End is required"],
    },
  },
  {
    versionKey: false,
  }
);

const DailyModel = model('Daily', dailySchema);
export default DailyModel;
