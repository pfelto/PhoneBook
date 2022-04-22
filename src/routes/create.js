import React from "react";

const Create = () => {
  return (
    <div>
      <h1>Create Contact</h1>
      {/* after you submit either go to that records page or home or phone list*/}
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label>Name</label>
        <input type="text"></input>
        <label>Number</label>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default Create;
