import { Schema, Types, model } from "mongoose";

import { UsersModel } from "../interfaces/users.interface";
import { regEmail, regPassword } from "../utils/validator.utils";

const userSchema = new Schema<UsersModel>(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      validate: {
        validator: (email: string) => regEmail.test(email),
        message: (props) => `${props.value} is not valid email`,
      },
    },
    password: {
      type: String,
      required: [true, "password is required"],
      trim: true,
    },
    image: {
      type: String,
      default: "https://electronicssoftware.net/wp-content/uploads/user.png",
    },
    projects: {
        type: [Types.ObjectId],
        default: [],
    }
  },
  {
    versionKey: false,
  }
);

const UserModel = model('User', userSchema);
export default UserModel;
