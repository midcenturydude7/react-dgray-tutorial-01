import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  function handleNameChange() {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  return (
    <div>
      <Header />
      <Content handleNameChange={handleNameChange} />
      <Footer />
    </div>
  );
}

export default App;
