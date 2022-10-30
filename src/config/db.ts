import 'dotenv/config';
import mongoose from 'mongoose';

const URI_MONGO = process.env.MONGO_DB as string;

export const connection = mongoose.connect(URI_MONGO);
