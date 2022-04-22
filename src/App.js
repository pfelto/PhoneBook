import { Link, Routes, Route } from "react-router-dom";
import List from "./routes/list";
import Create from "./routes/create";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <nav style={{ border: "solid 1px" }}>
        <Link to="/">Search Phone Book</Link>{" "}
        <Link to="/list">Phone Book List</Link>{" "}
        <Link to="/create">Create Contact</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Phone Book Search</h1>
              <form>
                <input type="text"></input>
                <input type="submit"></input>
              </form>
            </div>
          }
        />
        <Route path="list" element={<List />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
