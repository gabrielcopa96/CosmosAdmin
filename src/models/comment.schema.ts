import { Schema, Types, model } from 'mongoose';

import { CommentsModel } from '../interfaces/comments.interface'

const commentSchema = new Schema<CommentsModel>(
  {
    user: {
      type: Types.ObjectId,
      required: [true, "User is required"],
      ref: "User",
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      maxlength: [600, "Content cannot be more than 600 characters"],
      minlength: [10, "Content cannot be less than 10 characters"],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

const CommentModel = model('Comment', commentSchema);
export default CommentModel;