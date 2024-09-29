import { useContext } from "react";
import { ProjectContext } from "../App";
import { useNavigate, Link } from "react-router-dom";

export default function ProjectList(props) {
  let { projects, setProjects } = useContext(ProjectContext);

  const navigate = useNavigate();

  const deleteMe = (pid) => {
    setProjects(projects.filter((proj) => proj.id !== pid));
  };

  return (
    <div>
      <h2>Your Projects</h2>
      <Link to="/project">
        <button>Add Project</button>
      </Link>
      <table className="proj-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>
                  <button
                    className="primary"
                    onClick={() => navigate(`/project/${e.id}`)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteMe(e.id);
                    }}
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
