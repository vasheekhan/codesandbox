import {useMutation} from "@tanstack/react-query"
import {createProject} from "../../apis/projects";
export const useCreateProject = () => {
  const {mutateAsync,isSuccess,error,isPending}= useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      console.log("Project created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating project:", error);
    }
  });
  return{
    createProject: mutateAsync,
    isSuccess,
    error,
    isPending
  }
}