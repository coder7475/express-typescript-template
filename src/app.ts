import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/', indexRouter);

export default app;
