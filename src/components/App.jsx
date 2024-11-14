import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    console.log("Clicked");

    setName(event.target.value);
  }

  function handleClick(event) {
    console.log("button got clicked sucessfully");
    setHeading(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onClick={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
