import express from 'express';

import 'dotenv/config'

import session from 'express-session';

import passport from 'passport';

import cookieParser from 'cookie-parser';

import cors from 'cors';
import morgan from 'morgan';

import './middleware/passport';

import { router } from './routes';

const app = express();

// MIDDLEWARES
// middleware para logs de request
app.use(morgan('dev'));

// middleware para las cors, por defecto el origin -> *
// los methods -> POST-GET-PUT-PATCH-DELETE
app.use(cors({
    credentials: true,
}));

app.use(cookieParser(process.env.COOKIE_SECRET));

// middleware para poder recibir datos en formato json
app.use(express.json());

app.use(session({
    secret: process.env.SECRET as string,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());

app.use(passport.session());

app.use('/', router);

// exporto la app
export default app