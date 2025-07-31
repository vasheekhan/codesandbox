import express from 'express';
import { PORT } from './config/serverConfig.js';
import cors from 'cors';
import apiRoutes from './routes/index.js';


const app=express();
app.use(express.json());//it is same as bodyParser.json()
app.use(express.urlencoded({ extended: true }));//it is sane as bodyParser.urlencoded() 
app.use(cors());
app.use('/api', apiRoutes);
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});