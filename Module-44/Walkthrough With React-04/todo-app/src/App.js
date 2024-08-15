import React from "react";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <>
      <div className="h-screen overflow-y-hidden bg-gray-100">
        <div className="h-16 bg-[#262626] text-white flex items-center">
          <h1 className="ml-40 text-2xl font-bold">TODO APP</h1>
        </div>
        <TodoApp />
      </div>
    </>
  );
}

export default App;
