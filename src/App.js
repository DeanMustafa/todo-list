import React, { useState } from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTask = (todo) => {
    const newTask = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTask]);

    setInput("");
  };

  const deleteTask = (id) => {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList);
  }




  return (
    <div>
      <h1>ToDo List</h1>
      <input value={input} placeholder='Add a task' onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => addTask(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>{todo.todo}
          <button onClick={() => deleteTask(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App