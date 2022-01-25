import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import { loadProjects } from "../../../store/reducers/projects";
import ProjectsList from "./ProjectsList";
import ProjectDetails from "./ProjectDetails";
import ProjectDocuments from "./ProjectDocuments";
import ProjectProgress from "./ProjectProgress";
import ProjectLogframe from "./ProjectLogframe";

function FidaProjects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <Box>
      <Routes>
        <Route index element={<ProjectsList />} />
        <Route path="/details" element={<ProjectDetails />} />
        <Route path="/details/documents" element={<ProjectDocuments />} />
        <Route path="/details/progress" element={<ProjectProgress />} />
        <Route path="/details/logframe" element={<ProjectLogframe />} />
      </Routes>
    </Box>
  );
}

export default FidaProjects;
