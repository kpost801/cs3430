import { useContext } from "react";
import { ProjectContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";

export default function ProjectForm() {
  const navigate = useNavigate();
  let { projects, setProjects } = useContext(ProjectContext);

  let { pid } = useParams();
  pid = parseInt(pid);

  let project;
  if (pid) {
    project = { ...projects.find((p) => p.id === pid) };
  } else {
    let maxId = projects[projects.length - 1].id + 1;
    project = { id: maxId, title: "", description: "" };
  }

  const handTitleChange = (event) => {
    project.title = event.target.value;
  };
  const handleDescriptionChange = (event) => {
    project.description = event.target.value;
  };

  const addUpdateProjectFrom = (e) => {
    e.preventDefault();
    let projectsClone = [...projects];
    if (pid) {
      let objIndex = projectsClone.findIndex((obj) => obj.id === pid);
      projectsClone[objIndex] = project;
    } else {
      projectsClone.push(project);
    }
    setProjects(projectsClone);
    navigate("/list");
  };

  return (
    <div>
      <h1>Project Form</h1>
      <form onSubmit={addUpdateProjectFrom}>
        <div>
          <label>id:</label>
          <input type="text" name="id" defaultValue={projects.id} disabled />
        </div>
        <div>
          <label>title:</label>
          <input
            type="text"
            name="title"
            defaultValue={projects.title}
            onChange={handTitleChange}
          />
        </div>
        <div>
          <label>description:</label>
          <input
            type="text"
            name="description"
            defaultValue={projects.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
