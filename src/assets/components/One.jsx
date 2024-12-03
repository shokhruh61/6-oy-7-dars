import React, { useState, useEffect } from "react";

function One() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!name || !deadline) {
      alert("Iltimos, reja nomini va tugash muddatini kiriting!");
      return;
    }

    const newTodo = { value: Date.now(), name, deadline, completed: false };
    setTodos([...todos, newTodo]);

    setName("");
    setDeadline("");
  };

  const toggleComplete = (value) => {
    setTodos(
      todos.map((todo) =>
        todo.value === value ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (value) => {
    setTodos(todos.filter((todo) => todo.value !== value));
  };

  return (
    <div className="max-w-xl mx-auto border ">
      <h1>Rejalar Ilovasi</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={name}
          placeholder="Reja nomi"
          onChange={(e) => setName(e.target.value)}
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2"
        />
        <br />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="mr-6 w-full border-2 border-red-800 rounded-md p-2 mt-2" 
        />
        <br />
        <button onClick={addTodo} className="border mt-3 ml-52 bg-lime-500 p-3">Qo'shish</button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li className="flex justify-between items-center p-3 mb-5 border rounded-md"
          key={todo.value}
          >
            <span>
              {todo.name} (Tugash muddati: {todo.deadline})
            </span>
            <div>
              <button
                onClick={() => toggleComplete(todo.value)}
                className="mr-6"
              >
                {todo.completed ? "Bajarilmadi" : "Bajarildi"}
              </button>
              <button onClick={() => deleteTodo(todo.value)}>O‘chirish</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default One;
