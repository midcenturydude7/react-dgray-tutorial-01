import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [name, setName] = React.useState("Matt");
  const [count, setCount] = React.useState(0);

  function handleNameChange() {
    const names = ["Bob", "Kevin", "Dave", "Matt", "Henry"];
    const int = Math.floor(Math.random() * 5);
    setName(names[int]);
  }

  return (
    <div className="App">
      <Header />
      <Content
        handleNameChange={handleNameChange}
        name={name}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </div>
  );
}

export default App;
