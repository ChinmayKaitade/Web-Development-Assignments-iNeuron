import Button from "./components/Button";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Button text="Click Me" onClick={handleClick} />
    </>
  );
}

export default App;
