import express from 'express';
import ProjectRouter from './Project.js';
const router = express.Router();
router.use("/projects", ProjectRouter);
export default router;