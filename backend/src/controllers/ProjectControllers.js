import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';
const execedPromisified = util.promisify(child_process.exec);

export const createProjectController =async (req, res) => {
  // Logic to create a project
const projectId = uuid4();
console.log(`Creating project with ID: ${projectId}`);
await fs.mkdir(`./projects/${projectId}`);
await execedPromisified(`npm create vite@latest code -- --template react`,{
    cwd:`./projects/${projectId}`,  
});

  res.status(201).json({ message: "Project created successfully",data: { projectId } });
}