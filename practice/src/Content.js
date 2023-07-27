const Content = () => {
  const handleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    alert("Fok has been clicked");
  };

  function handleClick2(name) {
    alert(`${name} was clicked`);
  }
  return (
    <main>
      <p>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Fok it </button>
      <button onClick={() => handleClick2("Rishik")}>Click fok</button>
    </main>
  );
};

export default Content;
