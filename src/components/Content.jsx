/* eslint-disable react/prop-types */
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                onClick={() => handleCheck(item.id)}
                style={
                  item.checked ? { textDecoration: "line-through" } : null
                }>
                {item.item}
              </label>
              <HiOutlineTrash
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
}

export default Content;
