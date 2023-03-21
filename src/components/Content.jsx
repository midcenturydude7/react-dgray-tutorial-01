/* eslint-disable react/prop-types */
import React from "react";

function Content({ handleNameChange, name, count, setCount }) {
  function handleClick() {
    console.log(count);
  }

  // function handleClick2(name) {
  //   console.log(`${name} was clicked`);
  // }

  function handleClick3(e) {
    console.log(e);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name!</button>
      <button onClick={() => handleClick(setCount(count + 1))}>
        Click it!
      </button>
      <button onClick={(e) => handleClick3(e)}>Click it!</button>
    </main>
  );
}

export default Content;
