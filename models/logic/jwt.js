import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

const secret = process.env.SECRET;

export const sign = payload => jwt.sign(payload, secret,{expiresIn: 86400});
export const decode = token => jwt.sign(token, secret);