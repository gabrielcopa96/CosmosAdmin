import { Schema, Types, model } from 'mongoose';

import { ProjectsModel } from '../interfaces/projects.interface'

const projectSchema = new Schema<ProjectsModel>(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
      maxlength: [500, "description max length is 500 characters"],
      minlength: [10, "description min length is 10 characters"],
    },
    owner: {
      type: Types.ObjectId,
      ref: "User",
      required: [true, "owner is required"],
    },
    members: {
      type: [Types.ObjectId],
      ref: "User",
      required: [true, "members is required"],
      default: [],
    },
    images: {
      type: [String],
    },
    backlogs: {
      type: [Types.ObjectId],
      ref: "Backlog",
      default: [],
      required: [true, "backlogs is required"],
    },
    sprints: {
      type: [Types.ObjectId],
      ref: "Sprint",
      default: [],
      required: [true, "sprints is required"],
    },
    dailys: {
      type: [Types.ObjectId],
      ref: "Daily",
      default: [],
      required: [true, "dailys is required"],
    },
  },
  {
    versionKey: false,
  }
);

const ProjectModel = model('Project', projectSchema);
export default ProjectModel;