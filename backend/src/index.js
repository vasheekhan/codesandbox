import express from 'express';
import { PORT } from './config/serverConfig.js';
import cors from 'cors';


const app=express();
app.use(express.json());//it is same as bodyParser.json()
app.use(express.urlencoded({ extended: true }));//it is sane as bodyParser.urlencoded() 
app.use(cors());
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});