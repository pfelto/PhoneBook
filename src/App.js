import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <nav style={{ border: "solid 1px" }}>
        <Link to="/">Search Phone Book</Link>{" "}
        <Link to="/list">Phone Book List</Link>{" "}
        <Link to="/create">Create Contact</Link>
      </nav>
      <h1>Phone Book Search</h1>
      <form>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
