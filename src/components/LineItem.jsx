/* eslint-disable react/prop-types */
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        onClick={() => handleCheck(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}>
        {item.item}
      </label>
      <HiOutlineTrash
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem;
