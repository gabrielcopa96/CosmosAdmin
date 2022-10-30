import { UsersModel } from "../interfaces/users.interface";
import UserModel from "../models/user.schema";

import { encrypt } from "../utils/hashPassword.utils";

const signup = async (user: UsersModel) => {
    
    const { password, username, firstName, lastName, email, image, projects } = user;

    const passHash = await encrypt(password);

    const registerUser = await UserModel.create({
        username,
        password: passHash,
        firstName,
        lastName,
        email,
        image,
        projects
      });

    return registerUser;

}

export { signup }