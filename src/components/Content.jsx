/* eslint-disable react/prop-types */
import React from "react";

function Content({ handleNameChange }) {
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
    </main>
  );
}

export default Content;
