import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    setTodos([...todos, { text: newTodo, id: Date.now(), priority: "medium" }]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo);
    setNewTodo(todo.text);
  };

  const handleSaveTodo = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === currentTodo.id ? { ...todo, text: newTodo } : todo
      )
    );
    setIsEditing(false);
    setNewTodo("");
  };

  return (
    <div className="min-h-screen mt-16">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] m-auto">
        <h1 className="text-2xl font-bold mb-4">TODO APP</h1>
        {/* todo container */}
        <div className="flex mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Todo"
          />
          {isEditing ? (
            <>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setNewTodo("");
                }}
                className="ml-2 px-4 py-2 bg-red-500 hover:bg-red-700 transition-all ease-in-out duration-300 text-white rounded-lg font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveTodo}
                className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white rounded-lg font-semibold"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={handleAddTodo}
              className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white rounded-lg font-semibold"
            >
              Create Todo
            </button>
          )}
        </div>

        {/* todo list */}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center mb-2"
            >
              <span className="hover:bg-blue-100 flex-1 px-4 py-3 bg-gray-100 rounded-lg">
                {todo.text}
              </span>
              <button
                onClick={() => handleEditTodo(todo)}
                className="ml-2 px-4 py-2 bg-green-500 hover:bg-green-700 transition-all ease-in-out duration-300 text-white rounded-lg font-semibold"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="ml-2 px-4 py-2 bg-red-500 hover:bg-red-700 transition-all ease-in-out duration-300 text-white rounded-lg font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
