import express from 'express';
import router from './routes/route.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();
const port = 8000;

app.use(cors());
app.use('/', router);

DBConnection();

app.listen(port, ()=> console.log("Server is running on port : ", port));