import passport from "passport";

import 'dotenv/confgi'
import { Strategy as JtwStrategy, ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import UserModel from "../models/user.schema";
import { verified } from "../utils/hashPassword.utils";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_JWT,
}



passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((id, cb) => {
  UserModel.findById(id)
    .then((user) => cb(null, user))
    .catch((err) => cb(err));
});

passport.use(new Strategy(UserModel.authenticate()));

// passport.use(
//   new Strategy(
//     {
//       passReqToCallback: true,
//       usernameField: "email",
//     },
//     (...args: any[]) => {
//       const [req, , , done] = args;

//       const { email, password } = req.body;

//       UserModel.findOne({ email })
//         .then((user) => {
//           if (!user) {
//             console.log("Users no exists in database mongo");
//             return done(null, false, { message: "User not exists" });
//           }

//           verified(password, user.password)
//             .then((ok) => {
//               if (!ok) {
//                 console.log("Incorrect password");
//                 return done(null, false, { message: "Incorrect Passoword" });
//               }
//               console.log("User logged in");
//             })
//             .catch((err) => console.log("Error", err));

//           console.log("User auth successful");
//           return done(null, user);
//         })
//         .catch((err) => done(err));
//     }
//   )
// );

export default passport;
