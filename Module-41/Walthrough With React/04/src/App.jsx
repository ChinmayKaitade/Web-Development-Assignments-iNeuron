import List from "./components/List";

function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Mango"];

  return (
    <>
      <List items={fruits}/>
    </>
  );
}

export default App;
