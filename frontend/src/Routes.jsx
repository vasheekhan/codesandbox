import { Route, Routes } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import Playground from "./pages/Playground";

const Router=()=>{
    return(
    <Routes>
        <Route path="/" element={<CreateProject/>} />
        <Route path="/project/:projectid" element={<Playground/>} />
      </Routes>
    )
}
export default Router;