import { useNavigate } from "react-router-dom";
import { useCreateProject } from "../hooks/mutations/useCreateProject";
 // Adjust the path based on file location


export default function CreateProject() {
  const { createProject, isSuccess, error, isPending } = useCreateProject();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
   const res=   await createProject();
   console.log("res",res);
   navigate(`/project/${res.data.projectId}`);
   
    } catch (err) {
      console.error("Failed to create project:", err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1e1e1e] text-gray-200 font-mono">
      {/* Header similar to CodeSandbox */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#3e3e42]">
        <div className="flex items-center space-x-4">
  
          <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
          <h1 className="text-xl font-semibold tracking-tight">CodeNest</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
        </div>
      </header>
      
      {/* Main content with centered button */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="bg-[#252526] p-8 rounded-lg shadow-lg border border-[#3e3e42] max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Create New Project</h2>
          
          <button
            onClick={handleCreateProject}
            disabled={isPending}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isPending ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </>
            ) : (
              "Create Project"
            )}
          </button>
          
          {isSuccess && (
            <div className="mt-4 p-3 bg-green-900/30 border border-green-700 text-green-400 rounded">
              ✓ Project created successfully!
            </div>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-900/30 border border-red-700 text-red-400 rounded">
              ✗ Error creating project: {error.message}
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#252526] border-t border-[#3e3e42] py-3 px-4 text-center text-sm text-gray-400">
        <div className="flex justify-between items-center">
          <div>Ln 1, Col 1</div>
          <div>UTF-8</div>
          <div>JavaScript</div>
          <div>Spaces: 2</div>
        </div>
      </footer>
    </div>
  );
}