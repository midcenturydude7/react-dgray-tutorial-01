/* eslint-disable react/prop-types */
import React from "react";


function Footer({ length }) {
  return (
    <footer>
      <p>
        {length} List {length === 1 ? "item" : "items"}
      </p>
    </footer>
  );
}

export default Footer;
