import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  function handleNameChange() {
    const names = ["Bob", "Kevin", "Dave", "Matt", "Henry"];
    const int = Math.floor(Math.random() * 5);
    return names[int];
  }

  return (
    <div className="App">
      <Header />
      <Content handleNameChange={handleNameChange} />
      <Footer />
    </div>
  );
}

export default App;
