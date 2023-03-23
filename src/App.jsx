/* eslint-disable indent */
import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddItem from "./components/AddItem";

function App() {
  const [items, setItems] = React.useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setAndSaveItems(listItems);
  }
  const [newItem, setNewItem] = React.useState("");

  function setAndSaveItems(newItems) {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  }

  function addItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
