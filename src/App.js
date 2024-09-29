import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Main from "./components/Main";
import ProjectForm from "./components/ProjectForm";

import { useState, createContext } from "react";

export const ProjectContext = createContext();

function App() {
  let myArray = [
    { id: 1, title: "Mini-Project", description: "Build a birdhouse" },
    { id: 2, title: "medium-Project", description: "Build a doghouse" },
  ];
  const [projects, setProjects] = useState(myArray);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/list" element={<ProjectList />}></Route>
              <Route path="/project/:pid" element={<ProjectForm />}></Route>
              <Route path="/project" element={<ProjectForm />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/" element={<Main />}></Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </ProjectContext.Provider>
  );
}

export default App;
