import dotenv from 'dotenv';

import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';
import { connectDB } from './config/db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(apiRouter);

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};

startServer();