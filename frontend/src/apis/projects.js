import axios from "../config/axiosConfig";
export const createProject = async () => {
  try {
    const response = await axios.post('/api/v1/projects');
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}