import React, { useState, useEffect } from 'react';

import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    const storedTodos = JSON.parse(localStorage.getItem('todos'));

    if (storedTodos) {

      setTodos(storedTodos);

    }

  }, []);

  useEffect(() => {

    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);

  const handleAddTodo = () => {

    const newTodo = {

      id: todos.length + 1,

      text: prompt('Enter new todo:'),

      completed: false,

      createdAt: new Date(),

    };

    setTodos([...todos, newTodo]);

  };

  const handleToggleTodo = (id) => {

    setTodos(

      todos.map((todo) =>

        todo.id === id ? { ...todo, completed: !todo.completed } : todo

      )

    );

  };

  const handleDeleteTodo = (id) => {

    setTodos(todos.filter((todo) => todo.id !== id));

  };

  return (

    <div className="App">

      <h1>Todo List</h1>

      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>

        {todos

          .sort((a, b) => {

            if (a.completed && !b.completed) return 1;

            if (!a.completed && b.completed) return -1;

            return new Date(b.createdAt) - new Date(a.createdAt);

          })

          .map((todo) => (

            <li

              key={todo.id}

              onClick={() => handleToggleTodo(todo.id)}

              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}

            >

              {todo.text}

              <button onClick={(e) => { e.stopPropagation(); handleDeleteTodo(todo.id); }}>X</button>

            </li>

          ))}

      </ul>

    </div>

  );

}

export default App;