// frontend/src/components/TodoItem.js
import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/todos';

function TodoItem({ todo, setTodos }) {
  const toggleCompletion = () => {
    axios.put(`${API_URL}/${todo._id}`, { completed: !todo.completed }).then((res) => {
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t._id === todo._id ? res.data : t))
      );
    });
  };

  const deleteTodo = () => {
    axios.delete(`${API_URL}/${todo._id}`).then(() => {
      setTodos((prevTodos) => prevTodos.filter((t) => t._id !== todo._id));
    });
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={toggleCompletion}
      >
        {todo.task}
      </span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;
