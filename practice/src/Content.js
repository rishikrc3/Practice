import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Rishik");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Rishik"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  };

  const handleClick = () => {
    alert("Fok has been clicked");
  };

  const handleCounter = () => {
    setCount(count + 1);
  };
  const handleResetcounter = () => {
    setCount(0);
  };
  function handleClick2(name) {
    alert(`${name} was clicked`);
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <main>
      <p>Hello {name}!</p>
      <p>Counter {count}</p>
      <button onClick={handleNameChange}>Change the foking name</button>
      <button onClick={handleCounter}>Click to increase counter</button>
      <button onClick={handleResetcounter}>Reset Counter</button>
    </main>
  );
};

export default Content;
