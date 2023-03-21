/* eslint-disable react/prop-types */
import React from "react";

function Content({ handleNameChange }) {
  function handleClick() {
    console.log("You clicked it!");
  }

  function handleClick2(name) {
    console.log(`${name} was clicked`);
  }

  function handleClick3(e) {
    console.log(e);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Click it!</button>
      <button onClick={() => handleClick2("Matt")}>Click it!</button>
      <button onClick={(e) => handleClick3(e)}>Click it!</button>
    </main>
  );
}

export default Content;
