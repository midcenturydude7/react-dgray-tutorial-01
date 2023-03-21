import React from "react";
import Name from "./components/Name";
import RandomName from "./components/RandomName";

function App() {
  const name = "Henry";

  function handleNameChange() {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div>
      <h1>Dave Gray | React | Tutorial-01</h1>
      <Name name={name} />
      <RandomName handleNameChange={`Hello ${handleNameChange()}!`} />
    </div>
  );
}

export default App;
