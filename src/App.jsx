// App.js

import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Importa el archivo de estilos CSS

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Link to="/" className="text-white text-2xl font-bold mb-4">

        </Link>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
