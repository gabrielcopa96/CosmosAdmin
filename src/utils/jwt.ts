import { sign, verify } from "jsonwebtoken"

import 'dotenv/config';

const SECRET = process.env.SECRET_JWT || 'token.0101'

const generateToken = ( user: any ) => {

    const { email } = user;
    const jwt = sign( { email }, SECRET, {
        expiresIn: "1m",
    } )

    return jwt;
}

const verifyToken = (jwt: string ) => {

    const isOk = verify( jwt, SECRET )

    return isOk

}

export { generateToken, verifyToken }