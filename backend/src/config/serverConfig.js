import dotenv from 'dotenv';
dotenv.config();    
export const PORT = process.env.PORT || 3000;
export const REACT_COMMAND = process.env.REACT_CREATE_PROJECT_COMMAND || 'npm create vite@latest code -- --template react';