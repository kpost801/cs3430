import { useState } from "react";
import { name } from "./Name";
import "./App.css";

function App() {
  const [names, setNames] = useState(name);
  const [sort, setSort] = useState("ascending");
  const [over25, Setover] = useState(false);
  const [OnlyJim, setJim] = useState(false);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleOccupation() {
    const updateOccupation = names.map((person) => ({
      ...person,
      occupation: capitalizeFirstLetter(person.occupation),
    }));
    setNames(updateOccupation);
  }

  function handleOverAge() {
    if (over25) {
      setNames(name);
    } else {
      const filterAge = name.filter((person) => person.age > 25);
      setNames(filterAge);
    }
    Setover(!over25);
  }

  function handleSort() {
    const sortedName = [...names].sort((a, b) => {
      if (sort == "ascending") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setNames(sortedName);
    setSort(sort === "ascending");
    setSort(sort == "descending");
  }

  function Jim() {
    if (OnlyJim) {
      setNames(name);
    } else {
      const Jimmy = name.filter((person) => person.name === "Jim");
      setNames(Jimmy);
    }
    setJim(!OnlyJim);
  }

  function Restore() {
    setNames(name);
    setSort("ascending");
    over25(false);
    setJim(false);
  }

  return (
    <>
      <div className="container">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleOccupation}
        >
          Capitalize First Letter of Occupation
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSort}
        >
          Sort name ascending{sort === "ascending"}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleSort}
        >
          Sort name by descending{sort === "descending"}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleOverAge}
        >
          Display Only records Users Above 25
        </button>
        <button type="button" className="btn btn-secondary" onClick={Jim}>
          Only Show Jim
        </button>
        <button type="button" className="btn btn-secondary" onClick={Restore}>
          Restore Original Table
        </button>
      </div>
      <table className="table">
        <tbody>
          {names.map((person, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{person.name}</td>
              <td>{person.occupation}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
